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

const formValueColor = (selector, target, type) => {
    document.querySelector(selector).addEventListener('keyup', (event) => {
        if (type == 'background') {
            document.querySelector(target).style.backgroundColor = event.target.value
        } else if (type == 'text') {
            document.querySelector(target).style.color = event.target.value
        }
    })
}

document.querySelector('#input_background_color').addEventListener('change', (event) => {
    if (event.target.id == 'input_background_color' && event.target.value == 'custom') {
        document.querySelector('.input_background_color_hex').classList.remove('hidden');
        document.querySelector('.input_background_color_hex').classList.add('grid');

        formValueColor('#input_hex_background_color', '.thumbnail_container', 'background');
        formValueColor('#input_hex_text_color', '.thumbnail_container', 'text');

        formValueColor('#input_hex_background_color', '.input_hex_background_color_preview', 'background');
        formValueColor('#input_hex_text_color', '.input_hex_text_color_preview', 'background');
        formValueColor('#input_hex_text_color', '.post_label_ornament', 'background');

    } else {
        document.querySelector('.input_background_color_hex').classList.add('hidden');
        document.querySelector('.input_background_color_hex').classList.remove('grid');

        document.querySelector('.thumbnail_container').style.backgroundColor = event.target.value;
        document.querySelector('.thumbnail_container').style.color = '#ffffff';
        document.querySelector('.post_label_ornament').style.backgroundColor = '#ffffff';

        document.querySelector('#input_hex_background_color').value = event.target.value
        document.querySelector('#input_hex_text_color').value = '#ffffff'

        document.querySelector('.input_hex_background_color_preview').style.backgroundColor = event.target.value
        document.querySelector('.input_hex_text_color_preview').style.backgroundColor = '#ffffff'
    }
});

formValue('#input_post_label', '#post_label'); // Post Label
formValue('#input_post_title', '#post_title'); // Post Title
formValue('#input_post_author', '#post_author'); // Post Author
formValue('#input_blog_title', '#blog_title'); // Blog Title

