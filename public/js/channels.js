/* window.location.reload(); */

/* function for creating new channel */
const createNewChannel = async (event) => {
  event.preventDefault();

  const channelTitle = document.querySelector('#channel-title-submit').value.trim();
  const channelDesc = document.querySelector('#channel-desc-submit').value.trim();

  if (channelTitle && channelDesc) {
    try {
        const response = await fetch('/api/channel/create', {
            method: 'POST',
            body: JSON.stringify({ channelTitle, channelDesc }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            document.location.replace('/channel/'); }
      } catch(error) {
        alert(error.message)
      }
    /* const response = await fetch('/api/channel/create', {
      method: 'POST',
      body: JSON.stringify({ channelTitle, channelDesc }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/channel/');
    } else {
      
      alert('Failed to create channel');
    } */
  }
};

/* const delButtonHandler = async (event) => {
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
}; */

/* document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler); */

//selector for getting create channel form submission
document
    .querySelector('#create-new-channel-submit')
    .addEventListener('click', createNewChannel);


/* function to pop up form to create new channel */
function openForm() {
    document.querySelector("#create-channel-popup").style.display = "inline";
}

/* function to close pop up form */
function closeForm() {
    document.querySelector("create-channel-popup").style.display = "none";
}

/* get ids for create channel popup/close */
document
    .querySelector('#create-channel-redirect')
    .addEventListener('click', openForm);

document
    .querySelector('#closeout-btn')
    .addEventListener('click', closeForm);

  

