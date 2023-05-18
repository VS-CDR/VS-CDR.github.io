const themeBtn = document.querySelector(".header__theme-button");

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

popupLeftLink.addEventListener('click', function () {
    const imageElement = document.querySelector(".current");
    imageElement.classList.remove("current");
    const leftSibling = imageElement.previousElementSibling;
    leftSibling.classList.add("current");
    popupImg.src = leftSibling.src;
    checkLinks(leftSibling);
});

popupRightLink.addEventListener('click', function () {
    const imageElement = document.querySelector(".current");
    imageElement.classList.remove("current");
    const rightSibling = imageElement.nextElementSibling;
    rightSibling.classList.add("current");
    popupImg.src = rightSibling.src;
    checkLinks(rightSibling);
});

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

function messagePopupOpen() {
    const popupMessage = document.querySelector(".message-popup");
    popupMessage.classList.add("message-popup_active");
}

function sendMessage() {
    if (!localStorage.getItem("send-flag")) {
        setTimeout(messagePopupOpen, 30000);
    }
}
function messagePopupClose() {
    messagePopupButton.addEventListener('click', function () {
        localStorage.setItem("send-flag", "true");
        const popupHello = document.querySelector(".message-popup_active");
        popupHello.classList.remove("message-popup_active");
    })
}




const feedbackPopup = document.querySelector(".form-popup");
feedbackPopup.addEventListener('click', function(evt) {
    if (evt.target === feedbackPopup) {
        closePopup(feedbackPopup);
    }
    evt.stopPropagation();
});
const feedbackButton = document.querySelector(".footer__feedback-button");
feedbackButton.addEventListener('click', function () {
    feedbackPopup.classList.add('popup_active');
})

const feedbackForm = feedbackPopup.querySelector(".form-popup__form_feedback");
feedbackForm.addEventListener('submit', function() {
    const phone = feedbackPopup.querySelector(".form-popup__input[id='tel']");
    const email = feedbackPopup.querySelector(".form-popup__input[id='email']");
    const text = feedbackPopup.querySelector(".form-popup__input[id='text']");
    fetch("", {
        method: "POST",
        body: JSON.stringify({
            tel: phone.value,
            email: email.value,
            text: text.value
        })
    }).then(function() {
            closePopup(feedbackPopup);
        }).catch(function (err) {
            console.log(err);
        })
});



function hasValidInput(inputList) {
    let isOk = true;
    inputList.forEach((elem) => { isOk = elem.validity.valid ? isOk : false });
    return isOk;
}

function showInputError(element, errorSpan) {
    element.classList.add('popup__input_error');
    errorSpan.classList.add('popup__error_active');
}

function hideInputError(element, errorSpan) {
    element.classList.remove('popup__input_error');
    errorSpan.classList.remove('popup__error_active');
}

function isValid(input, spanError) {
    if (!input.validity.valid) {
        showInputError(input, spanError);
    } else {
        hideInputError(input, spanError);
    }
}

function toggleSubmit(inputs, button) {
    if (hasValidInput(inputs)) {
        button.classList.remove('popup__submit_disabled');
        button.disabled = false;
    } else {
        button.classList.add('popup__submit_disabled');
        button.disabled = true;
    }
}

function enableValidation(forms) {
    forms.forEach((form) => {
        const inputs = form.querySelectorAll('.popup__input');
        const spans = form.querySelectorAll('.popup__error');
        const buttonSubmit = form.querySelector('.popup__submit');
        for (let i = 0; i < inputs.length; ++i) {
            inputs[i].addEventListener('input', () => {
                isValid(inputs[i], spans[i]);
                toggleSubmit(inputs, buttonSubmit);
            });
        }
    });
}