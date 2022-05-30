const dropdowns = document.querySelectorAll(".dropdown")
const menuMobileBtn = document.querySelector(".menu-mobile-btn")
const closeMenuBtn = document.querySelector(".closemenu-btn")
const mobileMenu = document.querySelector(".header-links-content")
const body = document.querySelector("body")


dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", ()=> {
        console.log(dropdown)
        const dropdownContent = dropdown.querySelector(".dropdown-content")
        const arrow = dropdown.querySelector(".arrow-icon")
        arrow.style.transform = "rotate(180deg)"
        if (dropdownContent.classList.contains("hidden")) {
            dropdownContent.classList.remove("hidden")
        } else {
            dropdownContent.classList.add("hidden")
            arrow.style.transform = "rotate(0deg)"
        }

    }) 
})

menuMobileBtn.addEventListener("click", () => {
    mobileMenu.classList.add("show-sidebar")
})

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("show-sidebar")
})