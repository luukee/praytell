




    // not homepage
if (document.querySelector("body:not(.homepage)")) {

    // wine bottle image
    const wineBottle = document.querySelector("#wine-purchase .row .sqs-col-3:nth-child(1) .thumb-image");
    const headerElement = document.getElementsByClassName("Header-branding")[0];
    const mobileHeaderElement = document.getElementsByClassName("Mobile-bar-branding")[0];
    const wineTradeContent = document.getElementById("wine-trade");
    const wineTradeLightbox = document.querySelector("#trade-Lightbox .modal-content .close");
    const addToCartBtn = document.querySelector(".sqs-add-to-cart-button-wrapper");
    const lightboxBtnArea = document.querySelector("#Lightbox .sqs-block-content");

    // desktop header logo
    headerElement.setAttribute("href", "/wine-home");

    // mobile header logo
    mobileHeaderElement.setAttribute("href", "/wine-home");

    // wine bottle lightbox button
    wineBottle.setAttribute("onclick", "openLightbox();");

    // HOMEPAGE move trade content to .homepage lightbox
    wineTradeLightbox.after(wineTradeContent);

    // move addtocart button to the .homepage lightbox
    addToCartBtn.after(lightboxBtnArea);


} else { // HOMEPAGE
    
    // vars
    const wineBottle = document.querySelector("#wine .row .sqs-col-3:nth-child(1) .thumb-image");
    const tradeContent = document.getElementById("trade");
    const tradeLightbox = document.querySelector("#trade-Lightbox .modal-content .close");
    const wineContent = document.getElementById("container-ligtbox-register-btn");
    const wineLightbox = document.getElementById("lightbox-register-button");

    // HOMEPAGE move trade content to .homepage lightbox
    tradeLightbox.after(tradeContent);
    
    // add onclick="openLightbox();" to wine bottle
    wineBottle.setAttribute("onclick", "openLightbox();");

    // move lightbox button to the .homepage lightbox
    wineContent.after(wineLightbox);
}










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


