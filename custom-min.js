var headerElement=document.getElementsByClassName("Header-branding")[0];document.querySelector("body:not(.homepage)")&&headerElement.setAttribute("href","/wine-home");var mobileHeaderElement=document.getElementsByClassName("Mobile-bar-branding")[0];document.querySelector("body:not(.homepage)")&&mobileHeaderElement.setAttribute("href","/wine-home");const div1=document.getElementById("container-ligtbox-register-btn"),div2=document.getElementById("lightbox-register-button");div1.after(div2);const addToCartBtn=document.querySelector(".sqs-add-to-cart-button-wrapper"),lightboxBtnArea=document.querySelector("#Lightbox .sqs-block-content");document.querySelector("body:not(.homepage)")&&addToCartBtn.after(lightboxBtnArea),elements=document.getElementsByClassName("sqs-product-quick-view-button")[0];var i=0,len=elements.length;for(i=0;i<len;i++){var elem=elements[i];elem.innerHTML="More info. . ."}function openLightbox(){document.getElementById("Lightbox").setAttribute("style","display:flex; opacity:1;","class","active")}function openTradeLightbox(){document.getElementById("trade-Lightbox").setAttribute("style","display:flex; opacity:1;","class","active")}function closeLightbox(){document.getElementById("Lightbox").setAttribute("style","display:none; opacity:0;")}