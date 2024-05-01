const btn = document.querySelector('.button');
const code = document.querySelector('.output');
const input = document.querySelector('.input');

btn.addEventListener("click",generate);

function generate() {
    let data = input.value;
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    code.src = url;
}