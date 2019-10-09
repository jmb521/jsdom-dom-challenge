document.addEventListener("DOMContentLoaded", ()=> {

    let begCounter = document.getElementById("counter")
    let intCounter = parseInt(begCounter.innerText, 10)
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    let likesUL = document.getElementsByClassName("likes")[0]
    const pause = document.getElementById("pause")
    const submit = document.getElementById("submit")
    
    minus.addEventListener("click", minusFN())
    plus.addEventListener("click", plusFN())
    
    
    let clickHash = {}
    heart.addEventListener("click", function() {
        let li;
        if (intCounter in clickHash) {
            clickHash[intCounter] += 1
            let updateLI = document.getElementsByClassName(intCounter)
            updateLI[0].innerHTML = `${intCounter} has been liked  ${clickHash[intCounter]} times`
        } else {
            clickHash[intCounter] = 1
            li = document.createElement("li")
            li.className = intCounter
            li.innerHTML = `${intCounter} has been liked  ${clickHash[intCounter]} times`
        }
            
        likesUL.appendChild(li)

    })
    let paused = false;
    let listDiv = document.getElementById("list")
    let form = document.getElementById("comment-form")
    let comment = document.getElementById("comment-input")
    pause.addEventListener("click", function() {
        if(!paused) {
            disableButtons(true)
            clearInterval(setInt)
            paused = true;
            pause.innerHTML = "resume"
        } else if(paused) {
            setInt = window.setInterval(function() {
                plusFN();
            }, 1000)
            disableButtons(false)
            pause.innerHTML = "pause"
            paused = false;
        }
    })
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        let newComment = document.createElement("p")
        newComment.innerText = comment.value
        listDiv.appendChild(newComment)
        comment.value = ""
    })

    let setInt = window.setInterval(function(){
        plusFN();
    }, 1000);

    function minusFN() {
         begCounter.innerText = intCounter -1
    }

    function plusFN() {
        let increase = intCounter += 1
         begCounter.innerText = increase
    }

    function disableButtons(value) {
        minus.disabled = value
        plus.disabled = value
        submit.disabled = value
        heart.disabled = value
    }

   


})