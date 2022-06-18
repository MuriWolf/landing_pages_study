const dailyBtn = document.querySelector(".card--person__daily");
const weeklyBtn = document.querySelector(".card--person__weekly");
const monthlyBtn = document.querySelector(".card--person__monthly");
const cards = document.querySelectorAll(".card__content");
const cardsTitle = document.querySelectorAll(".card__content__header__title");


function getJson(time) {
    fetch("./data.json")
    .then((resp)=> resp.json())
    .then(function(data) {

        let c = 0
        let timeA = ""
        cards.forEach(card =>{
            const cardTitle = card.querySelector(".card__content__header__title")
            const title = data[c].title;
            cardTitle.textContent = title
            
            const currentArea = card.querySelector(".card__content__hours__current");
            const previousArea = card.querySelector(".card__content__hours__previous");
            
            const current = data[c].timeframes[time].current;
            const previous = data[c].timeframes[time].previous;

            switch (time) {
               case "daily" : timeA = "day"
               break
               case "weekly" : timeA = "week"
               break
               case "monthly" : timeA = "month"
            }
            
            currentArea.textContent = `${current}hrs`;
            previousArea.textContent = `Last ${timeA} - ${previous}hrs`;
            c++
        })
    }) 
}

function daily() {
    getJson("daily");
}
function weekly() {
    getJson("weekly");
}
function monthly() {
    getJson("monthly");
}

daily()

dailyBtn.addEventListener("click", daily);
weeklyBtn.addEventListener("click", weekly);
monthlyBtn.addEventListener("click", monthly);