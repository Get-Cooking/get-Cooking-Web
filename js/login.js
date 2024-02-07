async function signUp() {

    	const name = document.getElementById('name').value;
			const email = document.getElementById('email').value;
			const password = document.getElementById('password').value;
			const confirmPassword = document.getElementById('confirmPass').value;

			const userData = { name, email, password, confirmPassword };

			try {
				const response = await fetch('http://localhost:8080/user/register', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(userData),
				});

				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.message || 'Ошибка регистрации');
				}
				
				console.log('Успешно зарегистрирован:', data);

				localStorage.setItem('userProfile', JSON.stringify(userData));
				showSuccessMessage(data.message);

				clearFormFields();
        window.location.href = 'index.html';

				
				showSuccessMessage('Регистрация прошла успешно!');
			} catch (error) {

				console.error('Ошибка при регистрации:', error.message);
				showErrorMessage(error.message);

			}
		}

		function showErrorMessage(message) {
			const notification = document.getElementById('notification');
			notification.innerText = message;
			notification.style.color= 'white'
			notification.classList.add('visible');
		}

		function showSuccessMessage(message) {
			const notification = document.getElementById('notification');
			notification.innerText = message;
			notification.style.color = 'green';
			notification.classList.add('visible');
		}

		function clearFormFields() {
			document.getElementById('name').value = '';
			document.getElementById('email').value = '';
			document.getElementById('password').value = '';
			document.getElementById('confirmPass').value = '';
		}

async function login() {

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const userData = { email, password };

   	try {	
				const response = await fetch('http://localhost:8080/user/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(userData),
				});

				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.message || 'Ошибка регистрации');
				}
				
				console.log('Успешно зарегистрирован:', data);

				localStorage.setItem('userProfile', JSON.stringify(userData));
				showSuccessMessage(data.message);

				clearFormFields();
				        window.location.href = 'index.html';

				
				showSuccessMessage('Регистрация прошла успешно!');
			} catch (error) {

				console.error('Ошибка при регистрации:', error.message);
				showErrorMessage(error.message);
			}
}

		function showErrorMessage(message) {
			const notification = document.getElementById('notification');
			notification.innerText = message;
			notification.style.color= 'red'
			notification.classList.add('visible');
		}

		function showSuccessMessage(message) {
			const notification = document.getElementById('notification');
			notification.innerText = message;
			notification.style.color = 'green';
			notification.classList.add('visible');
		}

		function clearFormFields() {

						document.getElementById('loginPassword').value = '';
			document.getElementById('loginEmail').value = '';
		}
	


const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});