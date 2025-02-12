
    // not homepage
if (document.querySelector("body:not(.homepage)")) {

    // vars
    const winePurchaseBottle = document.querySelector("#wine-purchase .row .sqs-col-3:nth-child(1) .thumb-image");
    const headerElement = document.getElementsByClassName("Header-branding")[0];
    const mobileHeaderElement = document.getElementsByClassName("Mobile-bar-branding")[0];
    const wineTradeContent = document.getElementById("wine-trade");
    const wineTradeLightbox = document.querySelector("#trade-Lightbox .lightbox-content .close");
    const registerWineContent = document.getElementById("wine-register-popup");
    const registerWineLightbox = document.querySelector("#Lightbox .register .close");

    // desktop header logo
    headerElement.setAttribute("href", "/wine-home");

    // mobile header logo
    mobileHeaderElement.setAttribute("href", "/wine-home");

    // wine bottle lightbox button
    winePurchaseBottle.setAttribute("onclick", "openLightbox();");

    // move trade content to .homepage lightbox
    wineTradeLightbox.after(wineTradeContent);

    // HOMEPAGE move register content to register lightbox
    registerWineLightbox.after(registerWineContent);

} else if (document.querySelector("body.homepage")) { // HOMEPAGE
    
    // vars
    const wineBottle = document.querySelector("#wine .row .sqs-col-3:nth-child(1) .thumb-image");
    const tradeContent = document.getElementById("trade");
    const tradeLightbox = document.querySelector("#trade-Lightbox .lightbox-content .close");
    
    const registerContent = document.getElementById("register-popup");
    const registerLightbox = document.querySelector("#Lightbox .register .close");

    const wineContent = document.getElementById("container-ligtbox-register-btn");
    const wineLightbox = document.getElementById("lightbox-register-button");

    // HOMEPAGE move trade content to .homepage lightbox
    tradeLightbox.after(tradeContent);

    // HOMEPAGE move register content to register lightbox
    registerLightbox.after(registerContent);

    // add onclick="openLightbox();" to wine bottle
    wineBottle.setAttribute("onclick", "openLightbox();");

} // end IF statement

    /* lightboxes! */
    function openLightbox() {

        document.getElementById('Lightbox').setAttribute("style", "display:flex; opacity:1;", "class", "active");
        document.body.classList.toggle('noscroll');

    }
    function closeLightbox() {
        document.getElementById('Lightbox').setAttribute("style", "display:none; opacity:0;");
        document.body.classList.toggle('noscroll');

    }

    // trade lightbox
    function openTradeLightbox() {
        document.getElementById('trade-Lightbox').setAttribute("style", "display:flex; opacity:1;", "class", "active");
        document.body.classList.toggle('noscroll');
    }
    function closeTradeLightbox() {
        document.getElementById('trade-Lightbox').setAttribute("style", "display:none; opacity:0;");
        document.body.classList.toggle('noscroll');
    }




    // do the tilt!!!

(function () {
    const tiltRight = document.querySelectorAll('img[alt*="tilt-right"]');
    tiltRight.forEach(function (tiltRight) {
        tiltRight.classList.add('tilt-right');
    });
})();

(function () {
    const tiltLeft = document.querySelectorAll('img[alt*="tilt-left"]');
    tiltLeft.forEach(function (tiltLeft) {
        tiltLeft.classList.add('tilt-left');
    });
})();

(function () {
    const tiltRightOne = document.querySelectorAll('img[alt*="tilt-right-one"]');
    tiltRightOne.forEach(function(tiltRightOne) {
        tiltRightOne.classList.add('tilt-right-one');
    });
})();

(function () {
    const tiltLeftOne = document.querySelectorAll('img[alt*="tilt-left-one"]');
    tiltLeftOne.forEach(function(tiltLeftOne) {
        tiltLeftOne.classList.add('tilt-left-one');
    });
})();