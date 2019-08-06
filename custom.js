




    // not homepage
if (document.querySelector("body:not(.homepage)")) {

    /*change header logo link if NOT on homepage */
    var headerElement = document.getElementsByClassName("Header-branding")[0];
    var mobileHeaderElement = document.getElementsByClassName("Mobile-bar-branding")[0];

    // desktop
    headerElement.setAttribute("href", "/wine-home");
    // mobile
    mobileHeaderElement.setAttribute("href", "/wine-home");

    // HOMEPAGE move trade content to .homepage lightbox
    const wineTradeContent = document.getElementById("wine-trade");
    const wineTradeLightbox = document.querySelector("#trade-Lightbox .modal-content .close");
    wineTradeLightbox.after(wineTradeContent);

    // NOT HOME move addtocart button to the .homepage lightbox
    const addToCartBtn = document.querySelector(".sqs-add-to-cart-button-wrapper");
    const lightboxBtnArea = document.querySelector("#Lightbox .sqs-block-content");
    addToCartBtn.after(lightboxBtnArea);

    // homepage
} else {
    // HOMEPAGE move trade content to .homepage lightbox
    const tradeContent = document.getElementById("trade");
    const tradeLightbox = document.querySelector("#trade-Lightbox .modal-content .close");
    tradeLightbox.after(tradeContent);

    // move lightbox button to the .homepage lightbox
    const wineContent = document.getElementById("container-ligtbox-register-btn");
    const wineLightbox = document.getElementById("lightbox-register-button");
    wineContent.after(wineLightbox);
}








    // add onclick="openLightbox();" to wine bottle
    var wineBottle = document.querySelector("#wine .row .sqs-col-3:nth-child(1) .thumb-image");
    wineBottle.setAttribute("onclick", "openLightbox();");

    /* lightboxes! */
    function openLightbox() {
        document.getElementById('Lightbox').setAttribute("style", "display:flex; opacity:1;", "class", "active");
    }
    function closeLightbox() {
        document.getElementById('Lightbox').setAttribute("style", "display:none; opacity:0;");
    }

    // trade lightbox
    function openTradeLightbox() {
        document.getElementById('trade-Lightbox').setAttribute("style", "display:flex; opacity:1;", "class", "active");
    }
    function closeTradeLightbox() {
        document.getElementById('trade-Lightbox').setAttribute("style", "display:none; opacity:0;");
    }


