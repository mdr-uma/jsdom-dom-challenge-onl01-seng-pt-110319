document.addEventListener("DOMContentLoaded", function() {
    myTimer();
    minusButton();
    plusButton();
    pauseButton();
    heartButton();
    comment();
});
let timer = setInterval(myTimer, 1000);
let count = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");


function myTimer() {
    // count.innerText = parseInt(count.innerText, 10) + 1;
    count.innerText++;
}

function minusButton() {
    minus.addEventListener("click", function() {
        // count.innerText = parseInt(count.innerText, 10) - 1;
        count.innerText--;
    });
}

function plusButton() {
    plus.addEventListener("click", myTimer);
}

function pauseButton() {
    pause.addEventListener("click", function() {
        if (pause.textContent === 'resume') {
            pause.textContent = 'pause';
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            timer = setInterval(myTimer, 1000);
        } else {
            pause.textContent = 'resume';
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            clearInterval(timer);
        }
    });
}

function heartButton() {
    let li;
    let like = {};
    heart.addEventListener("click", function() {
        let ul = document.querySelector(".likes");
        let pI = parseInt(count.innerText, 10);

        if (pI in like) {
            like[pI] += 1;
        } else {
            like[pI] = 1;
            li = document.createElement("li");
        }
        li.innerText = `This ${pI} has been liked ${like[pI]} times.`;
        ul.appendChild(li);
    });
}


function comment() {
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();
        const comments = document.getElementById("list");
        const commentInput = document.getElementById("comment-input");
        const newComment = document.createElement("p");
        newComment.innerText = commentInput.value;
        comments.appendChild(newComment);
        commentInput.value = "";
    });
}