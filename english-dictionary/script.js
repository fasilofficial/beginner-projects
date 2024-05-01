const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

function getResult() {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML = `
                <h1 class="text-2xl mt-5">${inpWord}</h1>
                <p class="">/${data[0].phonetic || ""}/</p>
                <div class="mt-8">
                    <p class="text-gray-600">${data[0].meanings[0].partOfSpeech}</p>
                    <div class="ml-5">
                        <p>${data[0].meanings[0].definitions[0].definition}</p>
                        <p class="text-gray-600">"${data[0].meanings[0].definitions[0].example || ''}"</p>
                    </div>
                </div>
                `;
        })
        .catch(() => {
            result.innerHTML = `<h3 class="text-red-500 text-md mt-5">Sorry! couldn't find the word</h3>`;
        });
}

btn.addEventListener("click", () => {
    getResult();
});
window.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        getResult();
    }
})