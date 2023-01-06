const forms = document.querySelector('form');
const inputPostLabel = document.getElementById('input_post_label');
const inputPostTitle = document.getElementById('input_post_title');
const inputPostAuthor = document.getElementById('input_post_author');
const inputBlogTitle = document.getElementById('input_blog_title');

forms.onkeyup = (event) => {
    document.getElementById('post_label').innerHTML = inputPostLabel.value;
    document.getElementById('post_title').innerHTML = inputPostTitle.value;
    document.getElementById('post_author').innerHTML = inputPostAuthor.value;
    document.getElementById('blog_title').innerHTML = inputBlogTitle.value;
}