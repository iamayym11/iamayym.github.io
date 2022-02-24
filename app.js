const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));

  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNum");
    randomNumEl.innerHTML = randomNum;
  }
}
var anime =['Saitama', 'Gon', 'L', 'Lite', 'R', 'Killua', 'Tandjiro']
  function anime(){
   var anime =['Saitama', 'Gon', 'L', 'Lite', 'Rengoku', 'Killua', 'Tandjiro', 'Nezuko', 'Zenitsu']
    var randomAnime = Math.floor(Math.random() *(anime.length));
    document.getElementById('anime-display').innerHTML = anime[randomAnime];
  }
function soundClick() {
  var arrSound = ['audio/audio1.wav', 'audio/audio2.wav', 'audio/audio3.wav', 'audio/audio4.wav', 'audio/audio5.mp3', 'audio/audio6.mp3', 'audio/audio7.mp3'];
  var randomSound = Math.floor(Math.random() * arrSound.length);
  var audio = new Audio(arrSound[randomSound]);
  audio.play();
}

