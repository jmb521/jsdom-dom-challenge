document.addEventListener("DOMContentLoaded", function() {
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const counter = document.getElementById("counter")
    const ul = document.querySelector("ul")
    const list = document.querySelector("#list")
    const form = document.getElementById("comment-form")
    const submit = document.getElementById("submit")


    minus.addEventListener("click", function() {
        let num = parseInt(counter.innerText, 10)
        if (num > 0) {
            num --
            counter.innerText = num
        } else if(num === 0) {
            minus.disabled = true;
        }
    })

    plus.addEventListener("click", function() {
        incrementCounter()
    })
    
    function incrementCounter() {
        let num = parseInt(counter.innerText, 10)
        num++
        counter.innerText = num
    }
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let p = document.createElement("p")
        p.innerText = event.target[0].value
        list.append(p)
        event.target.value = null
    })
    let isPaused = false
    let timer = setInterval(incrementCounter, 1000)
    pause.addEventListener("click", function(e) {
        // console.log("event from pause button", e)
        if(isPaused == false) {
            clearInterval(timer)
            // isPaused = true
        } else if(isPaused ==true) {
            // timer
            timer = setInterval(incrementCounter, 1000)
            // isPaused = false
        }

        isPaused = !isPaused
        minus.disabled = !minus.disabled
        plus.disabled = !plus.disabled
        heart.disabled = !heart.disabled
        submit.disabled = !submit.disabled
    })
    
    let likes = {}
    heart.addEventListener("click", function() {
        let num = counter.innerText;
        let li = document.createElement("li")
        li.id = num
        let updatedLike = document.getElementById(num)
        if (likes[num]) {
            likes[num] = likes[num] + 1 
            updatedLike.innerText = `${num} has been liked ${likes[num]} time`
        } else {
            likes[num] = 1
            //  li.innerText = `${num} has been liked ${likes[num]} time`
            let liInner = `<li id="${num}">${num} has been liked ${likes[num]} time</li>`
            ul.innerHTML += liInner
            //  ul.append(li)
        }
        
    })






})