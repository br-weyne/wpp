var progressBar = document.querySelector('.progress');
var progressLabel = document.querySelector('.progress-label');

function atualizarProgresso(progresso) {
  progressBar.style.width = progresso + '%';
  progressLabel.textContent = progresso + '%';
}

function carregarProgresso() {
  var progresso = 0;
  var intervalo = setInterval(function () {
    progresso += 1;
    atualizarProgresso(progresso);
    if (progresso === 100) {
      clearInterval(intervalo);
    }
  }, 120);
}

carregarProgresso();

setTimeout(function () {
  var box1 = document.getElementById('box1');
  box1.style.display = 'flex';
}, 1000);

setTimeout(function () {
  var box2 = document.getElementById('box2');
  box2.style.display = 'flex';
}, 3000);

setTimeout(function () {
  var box3 = document.getElementById('box3');
  box3.style.display = 'flex';
}, 5000);

setTimeout(function () {
  var box4 = document.getElementById('box4');
  box4.style.display = 'flex';
}, 6000);

setTimeout(function () {
  var box5 = document.getElementById('box5');
  box5.style.display = 'flex';
}, 9000);

setTimeout(function () {
  var box6 = document.getElementById('box6');
  box6.style.display = 'flex';
}, 10000);

setTimeout(function () {
  var box7 = document.getElementById('box7');
  box7.style.display = 'flex';
}, 12000);


function render() {
  setTimeout(function () {
    window.location.href = "page4.html";
  }, 12500);
}

var dataDiv = document.getElementById('dataDiv');
var dataAtual = new Date();
var options = { day: 'numeric', month: 'long', year: 'numeric' };
var dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);
dataDiv.innerHTML = dataFormatada;

