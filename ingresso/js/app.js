function comprar() { 
    let qtd = parseInt(document.getElementById('qtd').value);
    let tipo = document.getElementById('tipo-ingresso').value;

    if(tipo == 'pista') {
        comprarPista(qtd);
    }
    if(tipo == 'inferior') {
        comprarInferior(qtd);
    }
    if(tipo == 'superior') {
        comprarSuperior(qtd);
    }

}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para compra, tente novamente')

    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!')

    }
}

function comprarInferior(qtd) { 
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponivel para compra, tente novamente')
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!')
    }
}

function comprarSuperior(qtd) { 
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior) {
        alert('Quantidade indisponivel para compra, tente novamente')
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!')
    }
}
