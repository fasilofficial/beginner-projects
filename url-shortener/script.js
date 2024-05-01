let inputEl = document.getElementById('input');
let btnEl = document.getElementById('btn');
let resultEl = document.getElementById('result');
let resultContainer = document.getElementById('resultContainer');

const getUrl = () => {
    var input = inputEl.value;
    fetch(`https://is.gd/create.php?format=json&url=${input}`)
    .then(response => response.json())
    .then(response => {
        console.log(response.shorturl)
        if (response.shorturl) {
            resultEl.href = response.shorturl;
            resultEl. innerText = response?.shorturl;
            resultContainer.classList.add('border-blue-500');
        } else {
            resultEl.innerText = 'Something went wrong!';
            resultEl.href = "";
            resultContainer.classList.remove('border-blue-500');
        }
    })
    .catch((err) => console.log(err))
}

btnEl.addEventListener('click', () => {
    getUrl()
});
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 13){
        getUrl()
    }
}) 


