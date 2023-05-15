const themeBtn = document.querySelector(".header__theme-button");
const contact_me = document.getElementById("contact_me");

function ChangeTheme() {
    let elem = document.querySelector(".header__theme-button");
    elem.classList.toggle("header__theme-button_dark")
    elem.classList.toggle("header__theme-button_light")

    elem = document.querySelector(".page");
    elem.classList.toggle("page_dark")
    elem.classList.toggle("page_light")

    elem = document.querySelector(".header");
    elem.classList.toggle('header_dark');
    elem.classList.toggle('header_light');

    elem = document.querySelector(".header__text");
    elem.classList.toggle('header__text_dark');
    elem.classList.toggle('header__text_light');

    elem = document.querySelector(".info");
    elem.classList.toggle('info_dark');
    elem.classList.toggle('info_light');

    elem = document.querySelector(".footer");
    elem.classList.toggle('footer_dark');
    elem.classList.toggle('footer_light');

    elem = document.querySelector(".footer__text");
    elem.classList.toggle('footer__text_dark');
    elem.classList.toggle('footer__text_light');
}

themeBtn.addEventListener("click", ChangeTheme);



const rainBtn = document.querySelector(".footer__rain-button");
let rain = document.querySelector(".rain");

rainBtn.addEventListener('click', function () {
    if (window.innerWidth >= 800) {
        rain.classList.add("rain_active");
        rain.classList.add("rain_animation");
    }
})

window.addEventListener('resize', function () {
    if (rain.classList.contains("rain_active")) {
        rain.classList.toggle("rain_animation");
    }
})

rain.addEventListener('click', function () {
    if (rain.classList.contains("rain_active")) {
        rain.classList.remove("rain_active");
    }
})

const popup = document.querySelector(".popup");
popup.addEventListener('click', function(evt) {
    if (evt.target === popup) {
        closePopup(popup);
    }
    evt.stopPropagation();
});

const popupImg = document.querySelector(".popup__image");
const images = document.querySelectorAll(".popup-data__image");
const popupLeftLink = document.querySelector(".popup__link_left");
const popupRightLink = document.querySelector(".popup__link_right");

images.forEach(function(imageElement) {
    const link = imageElement.src;
    imageElement.addEventListener('click', function() {
        popupImg.src = link;
        checkLinks(imageElement);
        popup.classList.add('popup_active');
        imageElement.classList.add("current");
    });
})

function checkLinks(imageElement) {
    if (!imageElement.nextElementSibling) {
        popupRightLink.setAttribute('style', 'display: none');
    } else {
        popupRightLink.setAttribute('style', 'display: block');
    }
    if (!imageElement.previousElementSibling) {
        popupLeftLink.setAttribute('style', 'display: none');
    } else {
        popupLeftLink.setAttribute('style', 'display: block');
    }
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
    const currentImage = document.querySelector('.current');
    if (currentImage) {
        currentImage.classList.remove("current");
    }
}

const messagePopupButton = document.querySelector(".message-popup__close-button");

sendMessage()
messagePopupClose()

function helloPopupOpen() {
    const popupMessage = document.querySelector(".message-popup");
    popupMessage.classList.add("message-popup_active");
}

function sendMessage() {
    if (!localStorage.getItem("send-flag")) {
        setTimeout(helloPopupOpen, 30000);
    }
}
function messagePopupClose() {
    messagePopupButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        localStorage.setItem("send-flag", "true");
        const popupHello = document.querySelector(".message-popup_active");
        popupHello.classList.remove("message-popup_active");
    })
}
