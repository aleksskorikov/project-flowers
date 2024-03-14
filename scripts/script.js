$(document).ready(function () {
	$(".section__clients-slider").slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
				}
            },
            {
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				}
            },
            {
				breakpoint: 545,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 413,
				settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    focusOnSelect: true
				}
			},
		]
	});
});

$(document).ready(function () {
    function initSlider() {
        $(".products__block").slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        focusOnSelect: true
        });
    }
    function destroySlider() {
        $(".products__block").slick("unslick");
    }

    function checkWindowSize() {
        if ($(window).width() <= 413) {
        initSlider();
        } else {
        destroySlider();
        }
    }
        checkWindowSize();

    $(window).resize(function () {
        checkWindowSize();
    });
});


function openCloseDropMenu() {
    const productsDropmenu = document.querySelectorAll(".products__dropmenu");
    const productsDropmenuOpen = document.querySelectorAll(".products__menu-items");
    const closeBtns = document.querySelectorAll(".products__dropmenu-close");

    productsDropmenuOpen.forEach(productOpen => {
        productOpen.addEventListener("click", () => {
            let btnProductOpen = productOpen.dataset.itemsname;
            productsDropmenu.forEach(productDropmenu => {
                if (productDropmenu.dataset.dropmenuname === btnProductOpen) {
                    productDropmenu.classList.add("dropmenu-activ");
                }
            });
        });
    });

    closeBtns.forEach(closeBtn => {
		closeBtn.addEventListener("click", (event) => {
			event.stopPropagation();
            let btn = closeBtn.dataset.closename;
            productsDropmenu.forEach(productDropmenu => {
				if (productDropmenu.dataset.dropmenuname === btn) {
                    productDropmenu.classList.remove("dropmenu-activ");
                }
            });
        });
    });
};
openCloseDropMenu();

document.addEventListener('DOMContentLoaded', () =>{
    const Buttons = document.querySelectorAll('.dropmenu__form-btn');

    Buttons.forEach(function (button) {
        button.addEventListener('click', () => {
            let category = button.getAttribute('data-category');
            let selectedRadio = document.querySelector(`[name="${category}"]:checked`);
            
            if (selectedRadio) {
                let label = selectedRadio.nextElementSibling;
                let dataItemsName = selectedRadio.getAttribute('name');
                let dataNeme = document.querySelector(`[data-itemsName="${dataItemsName}"] p`);
                dataNeme.textContent = label.textContent;
            }
        });
    });


    // ======================форма==================


    const openPopupBtn = document.querySelector('#openPopupBtn');
    const popup = document.querySelector('.section__form-popup');
    const form = document.querySelector('.section__form-form');
    const closePopupBtn = document.querySelector('.form__popup-close');

    closePopupBtn.addEventListener('click', () => {
        popup.classList.remove('show-popup');
        form.classList.remove('hide-form');
    });

    function hideNameError() {
        document.querySelector(".input__error-name").style.display = "none";
        document.querySelector(".input-name").classList.remove("form-error");
    }

    function hidePhoneError() {
        document.querySelector(".input__error-tel").style.display = "none";
        document.querySelector(".input-tel").classList.remove("form-error");
    }

    document.getElementsByName("name")[0].addEventListener('input', hideNameError);
    document.getElementsByName("tel")[0].addEventListener('input', hidePhoneError);

    openPopupBtn.addEventListener('click', function (e) {
        e.preventDefault();

    let nameInput = document.getElementsByName("name")[0].value;
    if (nameInput.trim() === "") {
        document.querySelector(".input__error-name").style.display = "block";
        document.querySelector(".input-name").classList.add("form-error");
        return;
    } else {
        hideNameError();
    }

    let phoneInput = document.getElementsByName("tel")[0].value;
    let phoneValid = /^\d+$/;

    if (phoneInput.trim() === "") {
        document.querySelector(".input-tel").classList.add("form-error");
        return;
    } else if (!phoneValid.test(phoneInput)) {
        document.querySelector(".input-tel").classList.add("form-error");
        document.querySelector(".input__error-tel").style.display = "block";
        return;
    } else {
        hidePhoneError(); 
    }

    popup.classList.add('show-popup');
    form.classList.add('hide-form');

    document.querySelector(".form-discription").reset();
        
});

    const dropMenu = document.querySelector(".header__nav-dropmenu");
    const dropMenuOpen = document.querySelector(".header__burger-menu");
        dropMenuOpen.addEventListener("click", () => {
        dropMenu.style = "display:block";
    });
    const dropMenuCloze = document.querySelector(".dropmenu-btn").addEventListener("click", () => {
        dropMenu.style.display = "none";
    });


    // =====================лічільник=====================

    const increaseBtns = document.querySelectorAll('#increaseBtn');
    const decreaseBtns = document.querySelectorAll('#decreaseBtn');

    increaseBtns.forEach(function (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            const counterId = increaseBtn.getAttribute('data-counter');
            const counterElement = document.getElementById(counterId);

            let counterValue = parseInt(counterElement.innerText);
            counterValue++;
            counterElement.innerText = counterValue;
        });
    });

    decreaseBtns.forEach(function (decreaseBtn) {
        decreaseBtn.addEventListener('click', function () {
            const counterId = decreaseBtn.getAttribute('data-counter');
            const counterElement = document.getElementById(counterId);

            let counterValue = parseInt(counterElement.innerText);
            if (counterValue > 0) {
                counterValue--;
                counterElement.innerText = counterValue;
            }
        });
    });
});











