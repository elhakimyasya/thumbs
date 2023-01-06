// const forms = document.querySelector('form');
// const inputPostLabel = document.getElementById('input_post_label');
// const inputPostTitle = document.getElementById('input_post_title');
// const inputPostAuthor = document.getElementById('input_post_author');
// const inputBlogTitle = document.getElementById('input_blog_title');

// forms.onkeyup = (event) => {
//     document.getElementById('post_label').innerHTML = inputPostLabel.value;
//     document.getElementById('post_title').innerHTML = inputPostTitle.value;
//     document.getElementById('post_author').innerHTML = inputPostAuthor.value;
//     document.getElementById('blog_title').innerHTML = inputBlogTitle.value;
// }
// forms.onchange = (event) => {
//     if (event.target.id == 'input_background_color' && event.target.value == 'custom') {
//         document.querySelector('.input_background_color_hex').classList.remove('hidden')
//     } else {
//         document.querySelector('.input_background_color_hex').classList.add('hidden')
//     }
// }


const formValue = (selector, target) => {
    document.querySelector(selector).addEventListener('keyup', (event) => {
        document.querySelector(target).innerHTML = event.target.value
    })
};

formValue('#input_post_label', '#post_label'); // Post Label
formValue('#input_post_title', '#post_title'); // Post Title
formValue('#input_post_author', '#post_author'); // Post Author
formValue('#input_blog_title', '#blog_title'); // Blog Title

formValue('#input_background_color', '#blog_title'); // Thumbnail Background

document.querySelector('#input_background_color').addEventListener('change', (event) => {
    if (event.target.id == 'input_background_color' && event.target.value == 'custom') {
        document.querySelector('.input_background_color_hex').classList.remove('hidden')
    } else {
        document.querySelector('.input_background_color_hex').classList.add('hidden')
    }
});