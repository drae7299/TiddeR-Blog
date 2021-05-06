const createNewBlog = async (event) => {
    event.preventDefault();
    
    
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
    .querySelector('#create-blog')
    .addEventListener('click', createNewBlog)