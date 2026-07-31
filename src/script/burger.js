const burger = document.querySelector(".burger")
const headerNav = document.querySelector(".header__nav")
const modal = document.querySelector(".modal")


function Burger() {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active")
        headerNav.classList.toggle("active")
        burger.setAttribute("aria-expanded", headerNav.classList.contains("active"))

        if (headerNav.classList.contains("active")) {
            modal.classList.remove("modal-active")
        }
    })

    headerNav.querySelectorAll(".header__nav-item").forEach((link) => {
        link.addEventListener("click", () => {
            burger.classList.remove("active")
            headerNav.classList.remove("active")
            burger.setAttribute("aria-expanded", "false")
        })
    })
}


export default Burger
