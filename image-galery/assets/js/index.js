// clear btn
const btnSearch = document.querySelector('.search__button');
const btnClose = document.querySelector('.search__button_close');
const input = document.querySelector('.search__input');
const containerImg = document.querySelector('.container__img');

function setFocus () {
    input.focus();
}

// const imgArr = ['path1', 'path2', 'path3','path4', 'path5'];

const imgArr = [
    {
        imgPath: 'path1',
    },
    {
        imgPath: 'path2',
    },
    {
        imgPath: 'path3',
    },
    {
        imgPath: 'path4'
    },
    {
        imgPath: 'path5',
    },
]

function addImgToHtml (imgArr) {
    for (let i = 0; i <= imgArr.length; i +=1 ) {
        containerImg.innerHTML += `<div class="img__wrapper">
                                    <img class="img__content" src=${imgArr[i]} alt="photo">
                                </div>`
    }
}

addImgToHtml(imgArr);


input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
     btnSearch.click();
     console.log('hi')
    }
})

btnClose.addEventListener('click', () => {
    event.preventDefault()
    input.value = '';
});

btnSearch.addEventListener('click', () => {
    event.preventDefault()
});
