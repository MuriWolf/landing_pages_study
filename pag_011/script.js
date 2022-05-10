const questions = document.querySelectorAll(".question-container")
const answers = document.querySelectorAll(".answer")
const titles = document.querySelectorAll(".question")

questions.forEach(question => {
    question.addEventListener("click", function() {
        // answers.forEach(answer => {
        //     if (!answer.classList.contains("hidden")) {
        //         answer.classList.add("hidden")
        //     }
        // })
        // titles.forEach(title => {
        //     title.classList.remove("bold")
        // })
        question.children[2].classList.toggle("hidden")
        question.children[0].classList.toggle("bold")
    })
})

