//function for signing up
const signupFormSubmit = async (event) => {
    event.preventDefault();
    //get signup form id's
    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && username && email && password) {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ name, username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
};

//get submit button/add listener for user sign up
document
    .querySelector('#signUpBtn')
    .addEventListener('click', signupFormSubmit);