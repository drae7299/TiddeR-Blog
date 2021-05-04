//function for logging in
const loginFormHandler = async (event) => {
    event.preventDefault();
    
    //get login form id's
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
};

//get login button/add listener for user log in
document
    .querySelector('#loginBtn')
    .addEventListener('click', loginFormHandler);