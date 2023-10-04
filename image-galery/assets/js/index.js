// clear btn
const CLIENT_ID = "Sn_s3gHw5E_z4kvsMct4V0ObVe0JgJot1sEYTJFPC4w";
const baseUrl = `https://api.unsplash.com/`;

function addImgToHtml(imgArr) {
    containerImg.innerHTML = '';
    for (let i = 0; i < imgArr.length; i++) {
        containerImg.innerHTML += `<div class="img__wrapper">
                                    <img class="img__content" src=${imgArr[i].urls.regular} alt=${imgArr[i].alt_description}>
                                </div>`
    }
}

const getPhotos = async () => {
    const response = await fetch(`${baseUrl}/photos?page=1`, {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': `Client-ID ${CLIENT_ID}`,
            'Content-Type': 'application/json'
        }})


    const data = await response.json();
    addImgToHtml(data)
}

getPhotos();

const getPhotosByQuery = async (search) => {
    const response = await fetch(`${baseUrl}/search/photos?page=1&query=${search}`, {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': `Client-ID ${CLIENT_ID}`,
            'Content-Type': 'application/json'
        }})


    const data = await response.json();
    addImgToHtml(data.results)
}

//a716CLgGaFTt8P7VHvNYHLhctIk5wG7WHwajfCikm5c
const btnSearch = document.querySelector('.search__button');
const btnClose = document.querySelector('.search__button_close');
const input = document.querySelector('.search__input');
const containerImg = document.querySelector('.container__img');

function setFocus() {
    input.focus();
}


  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        btnSearch.click();
        if (input.value) {
            getPhotosByQuery(input.value);
        }
    }
})

btnClose.addEventListener('click', () => {
    event.preventDefault()
    input.value = '';
});

btnSearch.addEventListener('click', () => {
    event.preventDefault()
});
