document.addEventListener("DOMContentLoaded", () => {
    const postBoxButton = document.querySelector('.post-box button');
    const postsContainer = document.querySelector('.posts');
    const postInput = document.querySelector('.post-box textarea');

    postBoxButton.addEventListener('click', () => {
        const content = postInput.value.trim();
        if (content) {
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = `<p><strong>User Name</strong></p><p>${content}</p>`;
            postsContainer.prepend(newPost);
            postInput.value = '';
        }
    });
});
