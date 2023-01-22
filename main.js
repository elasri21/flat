const header = document.querySelector("header");
const nav = document.querySelector("nav");
const toggleMenu = document.querySelector(".toggle-menu");
const goUp = document.querySelector(".go-up");
//
window.addEventListener("scroll", function () {
    if(this.scrollY < 100) {
        goUp.style.opacity = "0";
        header.style.boxShadow = "none";
    } else if(this.scrollY > 500){
        goUp.style.opacity = "1";
        header.style.boxShadow = "0 5px 10px #585978";
    }
});

//
toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
    }
});