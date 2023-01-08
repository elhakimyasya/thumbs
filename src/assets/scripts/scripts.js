import domtoimage from 'dom-to-image';

// Create Element
const functionCreateElement = (tag, options) => {
    let element = document.createElement(tag);
    for (var attributes in options) {
        if (attributes == 'class') {
            element.classList.add.apply(element.classList, options[attributes]);
        } else if (attributes == 'content') {
            element.innerHTML = options[attributes];
        } else {
            element[attributes] = options[attributes];
        }
    }

    return element;
};

const formKeyUp = (selector, target, type) => {
    document.querySelector(selector).addEventListener('keyup', (event) => {
        if (type == 'background') {
            document.querySelector(target).style.backgroundColor = event.target.value
        } else if (type == 'text') {
            document.querySelector(target).style.color = event.target.value
        } else if (type == 'innerHTML') {
            document.querySelector(target).innerHTML = event.target.value
        }
    })
};

// Background Color
const containerBackgroundColor = document.querySelector('.container_background_color');
const inputBackgroundColor = document.getElementById('input_background_color');
inputBackgroundColor.addEventListener('change', (event) => {
    if (event.target.value == 'custom') {
        containerBackgroundColor.classList.remove('hidden');
        containerBackgroundColor.classList.add('grid');

        formKeyUp('#input_hex_background_color', '.thumbnail_container', 'background');
        formKeyUp('#input_hex_text_color', '.thumbnail_container', 'text');

        formKeyUp('#input_hex_background_color', '.input_hex_background_color_preview', 'background');
        formKeyUp('#input_hex_text_color', '.input_hex_text_color_preview', 'background');
        formKeyUp('#input_hex_text_color', '.post_label_ornament', 'background');
    } else {
        containerBackgroundColor.classList.add('hidden');
        containerBackgroundColor.classList.remove('grid');

        document.querySelector('.thumbnail_container').style.backgroundColor = event.target.value;
        document.querySelector('.thumbnail_container').style.color = '#ffffff';
        document.querySelector('.post_label_ornament').style.backgroundColor = '#ffffff';

        document.querySelector('#input_hex_background_color').value = event.target.value
        document.querySelector('#input_hex_text_color').value = '#ffffff'

        document.querySelector('.input_hex_background_color_preview').style.backgroundColor = event.target.value
        document.querySelector('.input_hex_text_color_preview').style.backgroundColor = '#ffffff'
    }
});

// Background Image
document.querySelector('#input_background_image').addEventListener('change', (event) => {
    if (event.target.value != 'none') {
        document.querySelector('.background_image').classList.remove('hidden');
        document.querySelector('.input_background_image_advanced').classList.remove('hidden');
        document.querySelector('.input_background_image_advanced').classList.add('grid');

        document.querySelector('.background_image').style.backgroundImage = `url(./src/assets/images/patterns/${event.target.value}.png)`
    } else {
        document.querySelector('.background_image').classList.add('hidden');
        document.querySelector('.input_background_image_advanced').classList.add('hidden');
        document.querySelector('.input_background_image_advanced').classList.remove('grid');
    }

    console.log(event.target.value)
})

// Invert Background Image
document.querySelector('#image_invert').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.querySelector('.background_image').style.filter = event.target.value;
        document.querySelector('.background_image').style.opacity = '0.15';
    } else {
        document.querySelector('.background_image').style.filter = '';
        document.querySelector('.background_image').style.opacity = '0.25';
    }
})

// Post Label
formKeyUp('#input_post_label', '#post_label', 'innerHTML');
// Post Title
formKeyUp('#input_post_title', '#post_title', 'innerHTML');
// Post Author
formKeyUp('#input_post_author', '#post_author', 'innerHTML');
// Blog Title
formKeyUp('#input_blog_title', '#blog_title', 'innerHTML');

// Generate Thumbnail
const containerThumbnail = document.querySelector('.thumbnail_container');
document.getElementById('button_download_image').addEventListener('click', () => {
    var scale = 1.5;
    domtoimage.toJpeg(containerThumbnail, {
        width: containerThumbnail.clientWidth * scale,
        height: containerThumbnail.clientHeight * scale,
        style: {
            transform: 'scale(' + scale + ')',
            transformOrigin: 'top left'
        }
    }).then(function (dataUrl) {
        const element = functionCreateElement('a', {
            href: dataUrl,
            download: 'elcreative_thumbnail_' + Math.round(Math.random() * 9999) + 1,
        });
        element.click();

    }).catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
})

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}


if (navigator.canShare) {
    document.getElementById('button_share_image').addEventListener('click', async () => {
        const scale = 1.5;
        domtoimage.toJpeg(containerThumbnail, {
            width: containerThumbnail.clientWidth * scale,
            height: containerThumbnail.clientHeight * scale,
            style: {
                transform: 'scale(' + scale + ')',
                transformOrigin: 'top left'
            }
        }).then(async function (dataUrl) {
            const blob = await fetch(dataUrl).then(res => res.blob());
            let file = [new File([blob], 'elcreative_thumbnail_' + Math.round(Math.random() * 9999) + 1 + '.jpg', { type: 'image/jpeg' })];
            let filesArray = [file];

            if (navigator.canShare && navigator.canShare({ files: filesArray })) {
                navigator.share({
                    text: "Generated Thumbnail by EL Creative Tools: \n" + window.location.href + "\n\nEL Creative Academy:\n\nhttps://www.elcreativeacademy.com/",
                    files: filesArray,
                    title: document.getElementById('input_post_title').textContent.trim(),
                    url: 'https://www.elcreativeacademy.com/',
                });
            } else {
                document.getElementById('button_share_image').remove()
            }

        }).catch(function (error) {
            document.getElementById('button_share_image').remove()
        });
    })
} else {
    document.getElementById('button_share_image').remove()
}