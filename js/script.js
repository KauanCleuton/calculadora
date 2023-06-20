function insert(numero) {
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + numero;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.slice(0, -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = 'Nada';
    }
}


document.getElementById('checkbox').addEventListener('change', function() {
    var isChecked = this.checked;
    var calculadora = document.getElementsByClassName('calculadora')[0];
    var cinzaBotoes = document.getElementsByClassName('cinza');
    var azulBotoes = document.getElementsByClassName('azul');
    if (isChecked) {
        resultado.style.color = '#1D2028';
        calculadora.style.background = '#DFE2EB';
        for (var i = 0; i < cinzaBotoes.length; i++) {
            cinzaBotoes[i].style.background = '#B0B9CA';
            cinzaBotoes[i].style.color = '#1D2028';
        }
        for (var i = 0; i < azulBotoes.length; i++) {
            azulBotoes[i].style.background = '#D0D3E2';
            azulBotoes[i].style.color = '#1D2028';
        }
    } else {
        calculadora.style.background = '';
        for (var i = 0; i < cinzaBotoes.length; i++) {
            cinzaBotoes[i].style.background = '#545F71';
            cinzaBotoes[i].style.color = '#ffffff';
        }
        for (var i = 0; i < azulBotoes.length; i++) {
            azulBotoes[i].style.background = '#252B38';
            azulBotoes[i].style.color = '#ffffff';
        }
    }
});
