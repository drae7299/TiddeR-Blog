/* const createNewChannel = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#channel-name').value.trim();
  const needed_funding = document.querySelector('#channel-form').value.trim();
  const description = document.querySelector('#channel-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch('/api/channel', {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};
console.log('hello');
document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler); */

/* function to pop up form to create new channel */
function openForm() {
    document.querySelector("#create-channel-popup").style.display = "block";
}

/* function to close pop up form */
function closeForm() {
    document.querySelector("create-channel-popup").style.display = "none";
}

document
    .querySelector('#create-channel-redirect')
    .addEventListener('click', openForm)

document
    .querySelector('.closeout-btn')
    .addEventListener('click', closeForm)

  

