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
    const div1 = document.getElementById("container-ligtbox-register-btn");
    const div2 = document.getElementById("lightbox-register-button");
    div1.after(div2);

    // WINE HOME move addtocart button to the .homepage lightbox
    const addToCartBtn = document.querySelector(".sqs-add-to-cart-button-wrapper");    
    const lightboxBtnArea = document.querySelector("#Lightbox .sqs-block-content");
    if (document.querySelector("body:not(.homepage)")) {
        addToCartBtn.after(lightboxBtnArea);
    }


    // add onclick="openLightbox();" to wine bottle
    var wineBottle = document.querySelector("#wine .row .sqs-col-3:nth-child(1) .image-block");
    wineBottle.setAttribute("onclick", "openLightbox();");

    // change product quickview button text
    elements = document.getElementsByClassName("sqs-product-quick-view-button")[0];
    var i = 0;
    var len = elements.length;
    for (i = 0; i < len; i++) {
        var elem = elements[i];
        elem.innerHTML = 'More info. . .';
    }

    /* lightbox! */
    // let slideIndex = 1;
    // showSlide(slideIndex);

    // You are providing the functionality for your clickable content, which is 
    // your previews, dots, controls and the close button.

    function openLightbox() {
        document.getElementById('Lightbox').setAttribute("style", "display:flex; opacity:1;", "class", "active");
    }

    function openTradeLightbox() {
        document.getElementById('trade-Lightbox').setAttribute("style", "display:flex; opacity:1;", "class", "active");
    }

    function closeLightbox() {
        document.getElementById('Lightbox').setAttribute("style", "display:none; opacity:0;");
    };

    // Note that you are assigning new values here to our slidIndex.

    // function changeSlide(n) {
    //     showSlide(slideIndex += n);
    // };

    // function toSlide(n) {
    //     showSlide(slideIndex = n);
    // };

    // This is your logic for the light box. It will decide which slide to show 
    // and which dot is active.

    // function showSlide(n) {
    //     const slides = document.getElementsByClassName('slide');
    //     let modalPreviews = document.getElementsByClassName('modal-preview');

    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     };

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     };

    //     for (let i = 0; i < slides.length; i++) {
    //         slides[i].setAttribute("style", "display:none; opacity:0;");
    //     };

    //     for (let i = 0; i < modalPreviews.length; i++) {
    //         modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    //     };

    // };

