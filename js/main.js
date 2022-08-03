const button=document.querySelector(".page-header__toggle--toggle");
const opening=document.querySelectorAll(".open");  
const closing=document.querySelector(".main-nav_close-button");

      button.addEventListener("click", function() {
      opening.forEach(x => x.classList.toggle("open"));  
},{passive: true});
      closing.addEventListener("click", function() {
      opening.forEach(x => x.classList.toggle("open"));  
},{passive: true});

const popup = document.querySelector(".popup");
const popupButton = document.querySelector(".form-button");
const popupClose = document.querySelector(".popup_close");

popupButton.addEventListener("click", function() {
          popup.classList.add("popup-open");
          
          document.addEventListener("keydown", function (evt) {
            if (evt.key === ("Escape"||"Esc")) {
            popup.classList.remove("popup-open")    
            }
            }); 
      });

popupClose.addEventListener("click", function() {
      popup.classList.remove("popup-open")  
      });

     


