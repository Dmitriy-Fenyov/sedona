const button=document.querySelector(".page-header__toggle--toggle");
const opening=document.querySelectorAll(".open");  
const closing=document.querySelector(".main-nav_close-button");

      button.addEventListener("click", function() {
      opening.forEach(x => x.classList.toggle("open"));  
},{passive: true});
      closing.addEventListener("click", function() {
      opening.forEach(x => x.classList.toggle("open"));  
},{passive: true});