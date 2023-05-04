"use strict";

window.addEventListener("DOMContentLoaded", start);

// for(let i=0;i<x.length;i++) {
//     const delay = 0.1 * i;
//     document.querySelector("letter").style.setProperty("--delay", delay + "s");
// }

function start() {
    //get the text
    let array = [];
    let hello = document.querySelector(".hello");
    let name = document.querySelector(".name");

    array.push(hello);
    array.push(name);

    array.forEach(text  => {
        animateText(text);
    })
    
}

function animateText(text) {
    //Remove existing text 
    let myText = text.innerHTML;
    text.innerHTML = '';

    //split the text
    let splitText = myText.split("");
    // console.log(splitText);

    //create a span element and put the character inside the span element 
    splitText.forEach((character, index) => {
        let span = document.createElement("span");
        span.classList.add("staggered-animation");
        span.style.setProperty("--character", index);

        if (character === " ") {
            span.innerHTML = "&nbsp";
        } else {
            span.textContent = character;
        }
        text.append(span);
    });
}