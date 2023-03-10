// HANDLE SIGN IN AND SIGN UP ON DESKTOP
document.addEventListener('DOMContentLoaded', function () {
    var getBtnSignIn = document.querySelector('#sign-in-btn');
    var getBtnSignUp = document.querySelector('#sign-up-btn');
    var getModal = document.querySelector('.modal');
    var getModalOverlay = document.querySelector('.modal__overlay');
    var getFormSignIn = document.querySelector('.form-sign-in');
    var getSignInReturn = document.querySelector('#sign-in-return');
    var getSignUpReturn = document.querySelector('#sign-up-return');
    var getFormSignUp = document.querySelector('.form-sign-up');
    var getSignUpSwitch = document.querySelector('.form-sign-in__switch-btn');
    var getSignInSwitch = document.querySelector('.form-sign-up__switch-btn');


    getBtnSignIn.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignIn.classList.add('display-block');
        getFormSignUp.classList.remove('display-block');
    })

    getBtnSignUp.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignUp.classList.add('display-block');
        getFormSignIn.classList.remove('display-block');
    })

    getModalOverlay.addEventListener('click', function () {
        getModal.classList.remove('display-flex');
        getFormSignIn.classList.remove('display-block');
        getFormSignUp.classList.remove('display-block');

    })

    getSignInReturn.addEventListener('click', function () {
        getModal.classList.remove('display-flex');
        getFormSignIn.classList.remove('display-block');
        getFormSignUp.classList.remove('display-block');
    })

    getSignUpReturn.addEventListener('click', function () {
        getModal.classList.remove('display-flex');
        getFormSignIn.classList.remove('display-block');
        getFormSignUp.classList.remove('display-block');
    })

    getSignInSwitch.addEventListener('click', function () {
        getFormSignIn.classList.add('display-block');
        getFormSignUp.classList.remove('display-block');
    })

    getSignUpSwitch.addEventListener('click', function () {
        getFormSignUp.classList.add('display-block');
        getFormSignIn.classList.remove('display-block');
    })

    /**END  */


    // HANDLE SIGN IN AND SIGN UP ON TABLET AND MOBILE
    var getBtnSignInMobileTablet = document.querySelector('#btn-sign-in-moble-tablet');
    var getBtnSignUpMobileTablet = document.querySelector('#btn-sign-up-moble-tablet');
    var getMenuIcon = document.querySelector('.header__search-menu-icon');
    var getMenu = document.querySelector('.header__search-menu-content');
    var getOverlayMobile = document.querySelector('.header__search-overlay');
    var getCloseIcon = document.querySelector('.header__search-menu-content-icon');


    getMenuIcon.addEventListener('click', function () {
        getMenu.classList.add('displayMenu');
        getOverlayMobile.classList.add('display-block');
    })

    getCloseIcon.addEventListener('click', function () {
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })

    getOverlayMobile.addEventListener('click', function () {
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })

    getBtnSignInMobileTablet.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignIn.classList.add('display-block');
        getFormSignUp.classList.remove('display-block');
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })

    getBtnSignUpMobileTablet.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignUp.classList.add('display-block');
        getFormSignIn.classList.remove('display-block');
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })
}, false)

// /**END */

// SEARCH OPTION
document.addEventListener('DOMContentLoaded', function () {
    var optionBtns = document.querySelectorAll('.header__search-item');

    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].addEventListener('click', function () {
            for (let k = 0; k < optionBtns.length; k++) {
                optionBtns[k].classList.add('header__search--disable-select');
            }
            this.classList.remove('header__search--disable-select');
        })
    }
})
/**END */


// DISPLAY SMALL IMAGE WHEN CLICKED
function changeImage(fileName) {
    let bigImage = document.querySelector('.product__buy-img-large-img');
    bigImage.setAttribute('style', fileName);
}
/**END */


// SELECT COLOR AND SIZE
document.addEventListener('DOMContentLoaded', function () {
    var getColorBtn = document.querySelectorAll('.product__buy-order-color-square');
    var getSizeBtn = document.querySelectorAll('.product__buy-order-size-square');

    for (let i = 0; i < getColorBtn.length; i++) {
        getColorBtn[i].addEventListener('click', function () {
            for (let k = 0; k < getColorBtn.length; k++) {
                getColorBtn[k].classList.remove('select');
            }

            getColorBtn[i].classList.add('select');
        })
    }

    for (let i = 0; i < getSizeBtn.length; i++) {
        getSizeBtn[i].addEventListener('click', function () {
            for (let k = 0; k < getSizeBtn.length; k++) {
                getSizeBtn[k].classList.remove('select');
            }

            getSizeBtn[i].classList.add('select');
        })
    }
}, false)

/**END */

// QUANTITY OF BUY/
document.addEventListener('DOMContentLoaded', function () {
    var getMinus = document.querySelector('#minus');
    var getPlus = document.querySelector('#plus');
    var getInput = document.querySelector('.product__buy-order-quantity-number');
    let quantity = 1;



    getPlus.addEventListener('click', function () {
        quantity++;
        if (quantity < 10) {
            quantity = '0' + quantity;
            getInput.innerText = quantity;
        } else {
            getInput.innerText = quantity;

        }
    })

    getMinus.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            if (quantity < 10) {
                quantity = '0' + quantity;
                getInput.innerText = quantity;
            } else {
                getInput.innerText = quantity;
            }
        }
    })
}, false)

/**END */

// QUANTITY OF BUY MORE
document.addEventListener('DOMContentLoaded', function () {
    var getMinus = document.querySelector('.product__more-product-main-option-details-quantity-btn-sub');
    var getPlus = document.querySelector('.product__more-product-main-option-details-quantity-btn-add');
    var getInput = document.querySelector('.product__more-product-main-option-details-quantity-btn-input');
    let quantity = 1;

    getPlus.addEventListener('click', function () {
        quantity++;
        if (quantity < 10) {
            quantity = '0' + quantity;
            getInput.innerText = quantity;
        } else {
            getInput.innerText = quantity;

        }
    })

    getMinus.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            if (quantity < 10) {
                quantity = '0' + quantity;
                getInput.innerText = quantity;
            } else {
                getInput.innerText = quantity;
            }
        }
    })
}, false)
/**END */

// RATING FILTER
document.addEventListener('DOMContentLoaded', function () {
    var RateFilterBtns = document.querySelectorAll('.productRating-filter-right-options-btn');

    for (let i = 0; i < RateFilterBtns.length; i++) {
        RateFilterBtns[i].addEventListener('click', function () {
            for (let k = 0; k < RateFilterBtns.length; k++) {
                RateFilterBtns[k].classList.remove('productRating-filter-right-options-btn--select');
            }
            this.classList.add('productRating-filter-right-options-btn--select');
        })


    }
}, false)
/**END */

// BUY BTN ON MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var buyBtn = document.querySelector('.product__btn-buy-title');
    var buyDetail = document.querySelector('.product__btn-buy-details');
    var overlayBuy = document.querySelector('.product__btn-buy-details-overlay');
    var closeBtn = document.querySelector('.product__btn-buy-details-form-heading-right > i');

    hidden = function () {
        buyDetail.classList.remove('display-block');
    }

    buyBtn.addEventListener('click', function () {
        buyDetail.classList.add('display-block');
    })

    overlayBuy.addEventListener('click', hidden);
    closeBtn.addEventListener('click', hidden);
}, false)
/**END */

// CART BTN ON MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var cartBtn = document.querySelector('.product__btn-cart-title');
    var cartDetail = document.querySelector('.product__btn-cart-details');
    var overlayCart = document.querySelector('.product__btn-cart-details-overlay');
    var closeBtn = document.querySelector('.product__btn-cart-details-form-heading-right > i');

    hidden = function () {
        cartDetail.classList.remove('display-block');
    }

    cartBtn.addEventListener('click', function () {
        cartDetail.classList.add('display-block');
    })

    overlayCart.addEventListener('click', hidden);
    closeBtn.addEventListener('click', hidden);
}, false)
/**END */

// SELECT BUY BTN ON MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var smallImgs = document.querySelectorAll('.product__btn-buy-details-form-section-color-details-item-img');
    var mainImg = document.querySelector('.product__btn-buy-details-form-heading-left-img > img');
    var fileName = [];
    var smallImgsItems = document.querySelectorAll('.product__btn-buy-details-form-section-color-details-item');


    for (let i = 0; i < smallImgs.length; i++) {
        fileName[i] = smallImgs[i].getAttribute('src');
        smallImgs[i].addEventListener('click', function () {
            mainImg.setAttribute('src', fileName[i]);
            for (let k = 0; k < smallImgs.length; k++) {
                smallImgsItems[k].classList.remove('select');
            }
            smallImgsItems[i].classList.add('select');
        });
    }
}, false)
/**END */

// SELECT CART BTN ON MOBILE
var smallImgs = document.querySelectorAll('.product__btn-cart-details-form-section-color-details-item-img');
var mainImg = document.querySelector('.product__btn-cart-details-form-heading-left-img > img');
var fileName = [];
var smallImgsItems = document.querySelectorAll('.product__btn-cart-details-form-section-color-details-item');


for (let i = 0; i < smallImgs.length; i++) {
    fileName[i] = smallImgs[i].getAttribute('src');
    smallImgs[i].addEventListener('click', function () {
        mainImg.setAttribute('src', fileName[i]);
        for (let k = 0; k < smallImgs.length; k++) {
            smallImgsItems[k].classList.remove('select');
        }
        smallImgsItems[i].classList.add('select');
    });
}
/**END */

// SIZE BUY BTN ON MOBILE 
document.addEventListener('DOMContentLoaded', function () {
    var getSizeBtns = document.querySelectorAll('.product__btn-buy-details-form-section-size-details-item');

    for (let i = 0; i < getSizeBtns.length; i++) {
        getSizeBtns[i].addEventListener('click', function () {
            for (let k = 0; k < getSizeBtns.length; k++) {
                getSizeBtns[k].classList.remove('active');
            }
            getSizeBtns[i].classList.add('active');
        })
    }
}, false)
/**END */

// SIZE CART BTN ON MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var getSizeBtns = document.querySelectorAll('.product__btn-cart-details-form-section-size-details-item');

    for (let i = 0; i < getSizeBtns.length; i++) {
        getSizeBtns[i].addEventListener('click', function () {
            for (let k = 0; k < getSizeBtns.length; k++) {
                getSizeBtns[k].classList.remove('active');
            }
            getSizeBtns[i].classList.add('active');
        })
    }
}, false)
/**END */

// QUANTITY BUY BTN ON MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var getPlus = document.querySelector('.product__btn-buy-details-form-section-quantity-details-plus')
    var getInput = document.querySelector('.product__btn-buy-details-form-section-quantity-details-input');
    var getMinus = document.querySelector('.product__btn-buy-details-form-section-quantity-details-minus');
    var quantity = 1;

    getPlus.addEventListener('click', function () {
        quantity++;
        if (quantity < 10) {
            getInput.innerText = '0' + quantity;
        } else {
            getInput.innerText = quantity;
        }
    })
    getMinus.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            if (quantity < 10) {
                getInput.innerText = '0' + quantity;
            } else {
                getInput.innerText = quantity;
            }
        }
    })
}, false)
/**END */

// QUANTITY CART BTN ON MOBILE 
document.addEventListener('DOMContentLoaded', function () {
    var getPlus = document.querySelector('.product__btn-cart-details-form-section-quantity-details-plus')
    var getInput = document.querySelector('.product__btn-cart-details-form-section-quantity-details-input');
    var getMinus = document.querySelector('.product__btn-cart-details-form-section-quantity-details-minus');
    var quantity = 1;

    getPlus.addEventListener('click', function () {
        quantity++;
        if (quantity < 10) {
            getInput.innerText = '0' + quantity;
        } else {
            getInput.innerText = quantity;
        }
    })
    getMinus.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            if (quantity < 10) {
                getInput.innerText = '0' + quantity;
            } else {
                getInput.innerText = quantity;
            }
        }
    })
}, false)
/**END */