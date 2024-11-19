const form = document.querySelector('.login_form');
const signupButton = form.querySelector('.login_form__btn');

form.addEventListener('submit', async (e) => {
	e.preventDefault(); 
	const login = document.querySelector('.input_field[name="login"]').value;
const password = document.querySelector('.input_field[name="password"]').value;

const response = await fetch('/signin', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({login, password}),
});
	const data = await response.json();

	if (response.status === 201) {
		setTimeout(() => {
			window.location.href = '/';
		}, 1000);
	} else {
	}
})