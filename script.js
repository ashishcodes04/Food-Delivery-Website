// Welcome animation in console
console.log("Welcome to Swiggy Clone 🚀");

// Select all inputs
const inputs = document.querySelectorAll("input");

// Input focus animation
inputs.forEach((input) => {

    input.addEventListener("focus", () => {
        input.style.border = "2px solid #ff5200";
    });

    input.addEventListener("blur", () => {
        input.style.border = "none";
    });

});

// Typing effect for heading

const heading = document.querySelector("main p");

const text = "Order food & groceries. Discover best restaurants. Swiggy it!";

let index = 0;

heading.innerHTML = "";

function typeEffect(){

    if(index < text.length){

        heading.innerHTML += text.charAt(index);
        index++;

        setTimeout(typeEffect, 40);
    }
}

typeEffect();

// Smooth fade-in effect for inputs

window.addEventListener("load", () => {

    inputs.forEach((input, index) => {

        input.style.opacity = "0";
        input.style.transform = "translateY(30px)";

        setTimeout(() => {

            input.style.transition = "0.6s ease";
            input.style.opacity = "1";
            input.style.transform = "translateY(0)";

        }, index * 250);

    });

});