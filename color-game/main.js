let circle = document.querySelector("div#circle");
let red = document.querySelector("div.red");
let yellow = document.querySelector("div.yellow");
let blue = document.querySelector("div.blue");
let green = document.querySelector("div.green");
let pink = document.querySelector("div.pink");
let violet = document.querySelector("div.violet");
let orange = document.querySelector("div.orange");

red.addEventListener("click", () => {
    circle.removeAttribute("class");
    circle.classList.add("red");
})
yellow.addEventListener("click", () => {
    circle.removeAttribute("class");
    circle.classList.add("yellow");
})
blue.addEventListener("click", () => {
    circle.removeAttribute("class");
    circle.classList.add("blue");
})
green.addEventListener("click", () => {
    circle.removeAttribute("class");
    circle.classList.add("green");
})
pink.addEventListener("click", () => {
    circle.removeAttribute("class");
    circle.classList.add("pink");
})
violet.addEventListener("click", () => {
    circle.removeAttribute("class");
    circle.classList.add("violet");
})
orange.addEventListener("click", () => {
    circle.removeAttribute("class");
    circle.classList.add("orange");
})
document.addEventListener("keypress", (event) => {
    let key = event.key;
    switch(key) {
        case "r":
            circle.removeAttribute("class");
            circle.classList.add("red");
        break;
        case "y":
            circle.removeAttribute("class");
            circle.classList.add("yellow");
        break;
        case "b":
            circle.removeAttribute("class");
            circle.classList.add("blue");
        break;
        case "g":
            circle.removeAttribute("class");
            circle.classList.add("green");
        break;
        case "p":
            circle.removeAttribute("class");
            circle.classList.add("pink");
        break;
        case "v":
            circle.removeAttribute("class");
            circle.classList.add("violet");
        break;
        case "o":
            circle.removeAttribute("class");
            circle.classList.add("orange");
        break;
    }
})