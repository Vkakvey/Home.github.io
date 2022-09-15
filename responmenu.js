const hambugurBtn = document.querySelector(".hambugur")
;
const menuBar = document.querySelector(".responsive-nav")
;
hambugurBtn.addEventListener("click", function (){
    menuBar.classList.toggle("acticv");
});