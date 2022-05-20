const dropdowns = document.querySelectorAll(".dropdown")

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