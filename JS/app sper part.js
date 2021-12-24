const inputRange = document.querySelector('.menu .menu-one .input input.range.value');
const fontContainer = document.querySelectorAll('.list-service');
const font = document.querySelectorAll('.sub-list-service');
const value = document.querySelector('.value');


for (let i = 0; i < fontContainer.length; i++) {
    fontContainer[0].addEventListener("click", function () {
        font[0].classList.add('color');
        font[1].classList.remove('color');
        font[2].classList.remove('color');
        font[3].classList.remove('color');
    })
    fontContainer[1].addEventListener("click", function () {
        font[0].classList.remove('color');
        font[1].classList.add('color');
        font[2].classList.remove('color');
        font[3].classList.remove('color');

    })
    fontContainer[2].addEventListener("click", function () {
        font[0].classList.remove('color');
        font[1].classList.remove('color');
        font[2].classList.add('color');
        font[3].classList.remove('color');
    })
    fontContainer[3].addEventListener("click", function () {
        font[0].classList.remove('color');
        font[1].classList.remove('color');
        font[2].classList.remove('color');
        font[3].classList.add('color');
    })

}

function changeValue(count) {
    document.getElementById('range').value = count;
}