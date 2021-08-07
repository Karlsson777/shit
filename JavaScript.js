var HB = document.querySelector(".header__boorger");
var HM = document.querySelector(".header__menu");
HB.addEventListener("click", function () {
    HB.classList.toggle("active");
    HM.classList.toggle("active");
});