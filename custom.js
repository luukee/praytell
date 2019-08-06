   /*change header logo link if NOT on homepage */
    var headerElement = document.getElementsByClassName("Header-branding")[0];
    if (document.querySelector("body:not(.homepage)")) {
        headerElement.setAttribute("href", "/wine-home");
    }

    var mobileHeaderElement = document.getElementsByClassName("Mobile-bar-branding")[0];
    if (document.querySelector("body:not(.homepage)")) {
        mobileHeaderElement.setAttribute("href", "/wine-home");
    }



    // move lightbox button to the .homepage lightbox
    const div1 = document.getElementById("container-ligtbox-register-btn");
    const div2 = document.getElementById("lightbox-register-button");
    div1.after(div2);

    // move distribution content to .homepage lightbox
    // const div1 = document.getElementById("container-ligtbox-register-btn");
    // const div2 = document.getElementById("lightbox-register-button");
    // div1.after(div2);

    // WINE HOME move addtocart button to the .homepage lightbox
    const addToCartBtn = document.querySelector(".sqs-add-to-cart-button-wrapper");    
    const lightboxBtnArea = document.querySelector("#Lightbox .sqs-block-content");
    if (document.querySelector("body:not(.homepage)")) {
        addToCartBtn.after(lightboxBtnArea);
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


