const menuMobile = document.getElementsByClassName("menu__mobile")[0]
const navbarPage = document.getElementsByClassName("navbar__page")[0]

menuMobile.addEventListener("click", function (){
    navbarPage.style = "display: flex;"
})

navbarPage.addEventListener("click", function (e) {
    if (e.target.className === "navbar__page") {
        navbarPage.style = "display: none;"
    }
})