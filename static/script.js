const theme_btn = document.querySelector(".header__theme-button");
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

theme_btn.addEventListener("click", ChangeTheme);



const rain_btn = document.querySelector(".footer__rain-button");
let rain = document.querySelector(".rain");

rain_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
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
        ClosePopup(popup);
    }
    evt.stopPropagation();
});

const popup_img = document.querySelector(".popup__image");
const images = document.querySelectorAll(".popup-data__image");
const popup_left_link = document.querySelector(".popup__link_left");
const popup_right_link = document.querySelector(".popup__link_right");

images.forEach(function(image_element) {
    const link = image_element.src;
    image_element.addEventListener('click', function() {
        popup_img.src = link;
        check_links(image_element);
        popup.classList.add('popup_active');
        image_element.classList.add("current");
    });
})

function check_links(image_element) {
    if (!image_element.nextElementSibling) {
        popup_right_link.setAttribute('style', 'display: none');
    } else {
        popup_right_link.setAttribute('style', 'display: block');
    }
    if (!image_element.previousElementSibling) {
        popup_left_link.setAttribute('style', 'display: none');
    } else {
        popup_left_link.setAttribute('style', 'display: block');
    }
}

function ClosePopup(popup) {
    popup.classList.remove('popup_active');
    const current_image = document.querySelector('.current');
    if (current_image) {
        current_image.classList.remove("current");
    }
}
