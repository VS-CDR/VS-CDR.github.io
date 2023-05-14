const theme_btn = document.querySelector(".header__theme-button");

function ChangeTheme() {
    let elem = document.querySelector(".header__theme-button")
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

    elem = document.querySelector(".footer__rain-button");
    elem.classList.toggle('footer__rain-button_dark');
    elem.classList.toggle('footer__rain-button_light');
}

theme_btn.addEventListener("click", ChangeTheme);

let rain = document.querySelector(".rain");

