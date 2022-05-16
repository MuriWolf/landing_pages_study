const advice = document.querySelector("#advice")

const refreshBtn = document.querySelector("#refresh-btn")

fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then(data => {
        const h2 = document.createElement("h2")
        h2.innerText = `Advice # ${data.slip.id}`
        advice.appendChild(h2)
        const p = document.createElement("p")
        p.innerText = `${data.slip.advice}`
        advice.appendChild(p)
    }) 

refreshBtn.addEventListener("click", function() {
    window.location.reload()
})