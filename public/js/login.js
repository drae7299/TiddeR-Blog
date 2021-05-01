//function for signing up
const signupFormHandler = async (event) => {
    event.preventDefault();

    //get signup form id's
    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
};

//function for logging in
const loginFormHandler = async (event) => {
    event.preventDefault();
    
    //get login form id's
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
};

//get submit button/add listener for user sign up
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

//get login button/add listener for user log in
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);