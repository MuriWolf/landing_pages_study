const ratingContainer = document.querySelector(".rating-container") 
const stars = Array.from(document.querySelectorAll(".star"))
const submitRatingBtn = document.querySelector("button[type='submit']")

stars.forEach(star => {
    star.addEventListener("click", removeClass)
    star.addEventListener("click",  function() {
        if (!this.classList.contains("star-selected")) {
            this.classList.add("star-selected")
            submitRatingBtn.addEventListener("click", ratingFinished)
        } else {
            this.classList.remove("star-selected")
        }
        valueSelected =  this.innerHTML
    }) 

})

    function removeClass() {
        stars.forEach(star => {
            star.classList.remove("star-selected")
        })
    }
    
function ratingFinished() {
    ratingContainer.style.textAlign = "center"
    ratingContainer.style.justifyContent = "center"
    ratingContainer.innerHTML = 
    `
        <img src="images/illustration-thank-you.svg" class="thank-you-img" alt="thank-you">
        <span class="highlight-text"><p>You selected ${valueSelected} out 5</p></span>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    `
}