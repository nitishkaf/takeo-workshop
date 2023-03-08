const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.continuous = true;
rec.onresult = function (e) {
  console.log(e.results);
}
rec.start();
