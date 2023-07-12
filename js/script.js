function exibirAlerta() {
    alert("Você precisa ser usuário com cadastro ativo para comentar");
}

function verificarTelefone() {
    var telefoneInput = document.getElementById('telefone');
    var botao = document.getElementById('botao');
    var telefone = telefoneInput.value.replace(/\D/g, ''); // Remover caracteres não numéricos

    if (telefone.length === 11) {
        botao.disabled = false;
        botao.style.backgroundColor = '#218C7E'; // Mudar a cor para verde
    } else {
        botao.disabled = true;
        botao.style.backgroundColor = '#76c1b7';
        
    }
}

function formatarTelefone() {
    var telefone = document.getElementById('telefone');
    var valor = telefone.value.replace(/\D/g, '');
    var formatado = '';

    if (valor.length > 0) {
        formatado += '(' + valor.substring(0, 2) + ') ';
    }
    if (valor.length > 2) {
        formatado += valor.substring(2, 7) + '-';
    }
    if (valor.length > 7) {
        formatado += valor.substring(7, 11);
    }

    telefone.value = formatado;
}



function abrirPagina() {
    window.location.href = "page2.html";
}

function salvarInformacao() {
    var inputValor = document.getElementById('telefone').value;
    localStorage.setItem('informacao', inputValor);
}


var dataDiv = document.getElementById('dataDiv');
var dataAtual = new Date();
var options = { day: 'numeric', month: 'long', year: 'numeric' };
var dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);
dataDiv.innerHTML = dataFormatada;



