const { default: Canvas2Image } = require("./canvas2image");
const { default: html2canvas } = require("./html2canvas.min.js");

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

// // Parse Favicon
// document.getElementById('button_blog_parse').addEventListener('click', () => {
//     if (document.getElementById('input_blog_url').value != '') {
//         document.getElementById('blog_favicon').setAttribute('src', `${document.getElementById('input_blog_url').value}/favicon.ico`)
//         document.getElementById('blog_favicon').classList.remove('hidden')
//     } else {
//         alert('error')
//     }
// })


document.getElementById('button_download_image').addEventListener('click', () => {
    let getCanvas;
    html2canvas(document.querySelector('.thumbnail_container'), {
        onrendered: function (canvas) {
            getCanvas = canvas

            // Canvas2Image.saveAsJPEG(canvas, 1280, 720)
            Canvas2Image.saveAsJPEG(canvas, 1280, 720)
        },
    })

    console.log(getCanvas)
})