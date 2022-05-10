const questions = document.querySelectorAll(".question-container")
const answers = document.querySelectorAll(".answer")
const titles = document.querySelectorAll(".question")

questions.forEach(question => {
    question.addEventListener("click", function() {

        questions.forEach(item => {
            if (item !== question) {
                item.children[2].classList.add("hidden")
                item.children[0].classList.remove("bold")
                item.children[1].classList.remove("rotate")
            }  
        })
        question.children[0].classList.toggle("bold")
        question.children[1].classList.add("rotate")
        question.children[2].classList.toggle("hidden")
    })
})

