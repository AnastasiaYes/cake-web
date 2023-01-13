"use strict"

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);
//
//     async function formSend(e) {
//         e.preventDefault();
//
//         let error = formValidate(form);
//     }
//
//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');
//
//         for (let index = 0; index < formReq; index++) {
//             const input = formReq[index];
//             formRemoveError (input);
//
//             if (input.classList.contains('form_input')) {
//                 formAddError(input)
//                 error++;
//             }
//         }
//     }
//
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//
//     function formRemoveError (input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//
// });

let formInput = document.querySelectorAll('.form_input');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let ok = true;
    for (let i = 0; i < formInput.length; i++) {
        if (formInput[i].value === '') {
            formInput[i].classList.add('_error');
            ok = false;
        } else {
            formInput[i].classList.remove('_error');
        }
    }
    if (ok) {
        clearForm();
    }
})

function clearForm() {
    for (let i = 0; i < formInput.length; i++) {
        formInput[i].value = '';
    }
}

const formPreview = document.getElementById('formPreview');
const formImage = document.getElementById('formImage');

formImage.addEventListener('change', () => {
    uploadFile(formImage.files[0]);

    function uploadFile(file) {
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения')
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert('Файл должен быть менее 10 МБ.');
            return;
        }

        let reader = new FileReader();
        reader.onload = function (e) {
            let contents = e.target.result;
            formPreview.innerHTML = '<img src=' + contents + ' alt="фото">';
        };
        reader.onerror = function (e) {
            alert('Ошибка');
        }
        reader.readAsDataURL(file)
    }
});



