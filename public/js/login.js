//get signup form id's
const name = document.querySelector('#name-signup').value.trim();
const username = document.querySelector('#username-signup').value.trim();
const email = document.querySelector('#email-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();

//function for signing up
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    if (username && email && password) {
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

//get submit button for user sign up
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);