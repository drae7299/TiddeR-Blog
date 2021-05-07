const createNewBlog = async (event) => {
    event.preventDefault();

    const blog_text = document.querySelector('#blog-title-submit').value.trim();

    const channel_split = window.location.pathname;
    console.log(channel_split);
    var channel_id = channel_split.split('/')[2];
    console.log(channel_id);

    
    if (blog_text && channel_id) {
        const response = await fetch('/api/blog/create', {
          method: 'POST',
          body: JSON.stringify({ blog_text, channel_id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/channel');
        } else {
          alert('Failed to create blog post');
        }
    }
};

/* function to pop up form to create new channel */
function openForm() {
    document.querySelector("#create-blog-popup").style.display = "inline";
}

/* function to close pop up form */
function closeForm() {
    document.querySelector("create-blog-popup").style.display = "none";
}

/* get ids for create blog popup/close */
document
    .querySelector('#create-blog-redirect')
    .addEventListener('click', openForm);

document
    .querySelector('#closeout-btn')
    .addEventListener('click', closeForm);

document
    .querySelector('#create-new-blog-submit')
    .addEventListener('click', createNewBlog)