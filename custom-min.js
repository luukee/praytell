if(document.querySelector("body:not(.homepage)")){const e=document.querySelector("#wine-purchase .row .sqs-col-3:nth-child(1) .thumb-image"),t=document.getElementsByClassName("Header-branding")[0],o=document.getElementsByClassName("Mobile-bar-branding")[0],n=document.getElementById("wine-trade"),c=document.querySelector("#trade-Lightbox .lightbox-content .close"),r=document.getElementById("wine-register-popup"),i=document.querySelector("#Lightbox .register .close"),l=document.querySelector(".sqs-add-to-cart-button-wrapper"),s=document.querySelector("#Lightbox .sqs-block-content");t.setAttribute("href","/wine-home"),o.setAttribute("href","/wine-home"),e.setAttribute("onclick","openLightbox();"),c.after(n),i.after(r),l.after(s)}else{const e=document.querySelector("#wine .row .sqs-col-3:nth-child(1) .thumb-image"),t=document.getElementById("trade"),o=document.querySelector("#trade-Lightbox .lightbox-content .close"),n=document.getElementById("register-popup"),c=document.querySelector("#Lightbox .register .close"),r=document.getElementById("container-ligtbox-register-btn"),i=document.getElementById("lightbox-register-button");o.after(t),c.after(n),e.setAttribute("onclick","openLightbox();"),r.after(i)}function openLightbox(){const e=document.querySelector("body");document.getElementById("Lightbox").setAttribute("style","display:flex; opacity:1;","class","active"),e.classList.toggle("noscroll",overlayOpen)}function closeLightbox(){document.getElementById("Lightbox").setAttribute("style","display:none; opacity:0;")}function openTradeLightbox(){document.getElementById("trade-Lightbox").setAttribute("style","display:flex; opacity:1;","class","active")}function closeTradeLightbox(){document.getElementById("trade-Lightbox").setAttribute("style","display:none; opacity:0;")}