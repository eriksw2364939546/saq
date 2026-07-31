const modal = document.querySelector(".modal")
const openModBtn = document.querySelector(".open__modal")
const closeModal = document.querySelector(".close-modal")
const burger = document.querySelector(".burger")
const headerNav = document.querySelector(".header__nav")


function Modal () {
    openModBtn.addEventListener("click", () => {
        modal.classList.add("modal-active")
        burger.classList.remove("active")
        headerNav.classList.remove("active")
        burger.setAttribute("aria-expanded", "false")
    })
    
    closeModal.addEventListener("click", () => {
        modal.classList.remove("modal-active")
    })

}



export default Modal
