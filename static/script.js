const theme_btn = document.querySelector(".header__theme-button");
const contact_me = document.getElementById("contact_me");

function ChangeTheme() {
    let elem = document.querySelector(".header__theme-button");
    elem.classList.toggle("header__theme-button_dark")
    elem.classList.toggle("header__theme-button_light")

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