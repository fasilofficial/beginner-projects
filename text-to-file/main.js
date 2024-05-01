let text = document.getElementById("text");
let save = document.getElementById("save");
let reset = document.getElementById("reset");
var filename = document.getElementById("filename");


save.addEventListener("click", () => {
    if(text.value.length > 0) {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(new Blob([text.value], {type: "text/plain"}));
            a.download = filename.value;
            a.click();
    }
})

reset.addEventListener("click", () => {
    text.value = '';
})