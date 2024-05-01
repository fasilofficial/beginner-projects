const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const generate = document.getElementById('button');


const link = `https://api.quotable.io/random`;

function getQuote(){
    fetch(link)
        .then(response => {
            let data = response.json();
            return data;
        })
        .then(data => {
            quoteElement.innerText = `"${data.content}"`;
            authorElement.innerText = `―${data.author}`;
        })
        .catch(error => {
            console.log(error);
        });
}

window.addEventListener('load', getQuote);
button.addEventListener('click', getQuote)