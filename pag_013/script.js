const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", ()=> {
        console.log(dropdown)
        const dropdownContent = dropdown.querySelector(".dropdown-content")
        if (dropdownContent.classList.contains("hidden")) {
            dropdownContent.classList.remove("hidden")
        } else {
            dropdownContent.classList.add("hidden")
        }

    })  
})