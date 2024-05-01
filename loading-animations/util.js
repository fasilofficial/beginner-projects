let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");

let card1 = `
<div class="loader"></div>

<style>
    .loader {
        width: 5em;
        height: 5em;
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        animation: pulse 0.9s infinite linear;
    }
    @keyframes pulse {
        0% {
            transform: scale(.15);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
</style>
`;

let card2 = `
<div class="loader"></div>

<style>
    .loader {
        transform: perspective(148px) rotateX(-45deg);
        width: 32px;
        height: 72px;
        position: relative;
        border: 2px solid #fff;
        animation: fill 1.5s linear infinite alternate;
    }
    @keyframes fill {
        0% {
            box-shadow: 0 0 #eb3d65 inset;
        }
        100% {
            box-shadow: 0 -78px #eb3d65 inset;
        }
    }
</style>
`;

let card3 = `
<div class="loader"></div>

<style>
    .loader {
        position: relative;
        width: 4em;
        height: 4em;
        border-radius: 50%;
        border: 2px solid #f9f9f9;

    }
    .loader::after {
        content: "";
        position: absolute;
        bottom: 29px;
        left: 30px;
        display: block;
        transform-origin: 0% 100%;
        width: 1px;
        height: 24px;
        background-color: #f9f9f9;
        animation: rotate 1s infinite linear;
    }
    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
</style>
`;
let card4 = `
<div class="loader"></div>

<style>
    .loader {
        width: 4em;
        height: 4em;
        border-radius: 50%;
        border: 8px solid rgba(255, 255, 255, 1);
        border-right-color: rgba(255, 255, 255, 0);
        animation: rotate 0.575s infinite linear;
    }
    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
</style>
`;

function copy(card) {
    switch(card) {
        case 1:
            navigator.clipboard.writeText(card1);
            break;
        case 2:
            navigator.clipboard.writeText(card2);
            break;
        case 3:
            navigator.clipboard.writeText(card3);
            break;
        case 4:
            navigator.clipboard.writeText(card4);
            break;
    }   
}

btn1.addEventListener('click', () => {
    copy(1);
    btn1.innerHTML = "Copied"
})
btn2.addEventListener('click', () => {
    copy(2);
    btn2.innerHTML = "Copied"
})
btn3.addEventListener('click', () => {
    copy(3);
    btn3.innerHTML = "Copied"
})
btn4.addEventListener('click', () => {
    copy(4);
    btn4.innerHTML = "Copied"
})