const quantidade = document.querySelector('#qtd')
const ingresso = document.querySelector('#tipo-ingresso')

let pista = 100;
let superior = 200;
let inferior = 400;

function comprar() {

    const qtd = quantidade.value;
    const tipoIngresso = ingresso.value;

    if (isNaN(qtd) || qtd <= 0) {
        alert('Quantidade de ingresso inválida!')
    }

    switch(tipoIngresso) {
        case 'pista':
            pista -= qtd
            atualizarNumeroDeIngressos('#qtd-pista', pista)
            break;
        case 'inferior':
            inferior -= qtd
            atualizarNumeroDeIngressos('#qtd-inferior', inferior)
            break;
        case 'superior':
            superior -= qtd;
            atualizarNumeroDeIngressos('#qtd-superior', superior)
    }
}

function atualizarNumeroDeIngressos(idLabel, valor) {

    if (valor < 0) {
        alert('Quantidade de ingresso indisponível!')
        return;
    }

    const labelAtualizar = document.querySelector(idLabel)
    labelAtualizar.textContent = valor;
}