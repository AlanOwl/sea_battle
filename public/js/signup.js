const form = document.querySelector('.login_form');
const signupButton = form.querySelector('.signup_btn');


form.addEventListener('submit', async (e) => {
	e.preventDefault();
	let login = form.querySelector('.input_field[name="login"]').value
	let password = form.querySelector('.input_field[name="password"]').value
	

	const response = await fetch('/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ login, password }),
	});

	const data = await response.json();

	if (response.status === 201) {
		form.reset();
		setTimeout(() => {
			window.location.href = '/signin';
		}, 1000);
	} else {
	}

});