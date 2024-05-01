const textInputField = document.getElementById("text-input")
const form = document.getElementById("form")
const clear = document.getElementById("clear-button")

let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
});




form.onsubmit = (event) => {
  event.preventDefault()
  speech.text = document.getElementById("text-input").value;
  window.speechSynthesis.speak(speech);
};
clear.addEventListener('click', () => {
    textInputField.value = ""
})