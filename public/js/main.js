(() => { //Protect the lemmings
// DOM selectors
const signUpFirstName = document.querySelector('js-signUpFirstName');

// CREATE NEW USER
const createNewUser = () => {
	const username = signUpUsername.value;
	const password = signUpPassword.value;

	POST('./auth/createNewUser', {username,password})
};


})();