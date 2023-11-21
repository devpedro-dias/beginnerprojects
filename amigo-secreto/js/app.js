let amigos = [];

function adicionar() {

    let amigo = document.getElementById('nome-amigo').value.toUpperCase();
    if (amigo == ''){
        alert('Informe o nome do amigo, por favor');
        return;
    }
    if (amigos.includes(amigo)){
        alert('Nome já adicionado!')
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo)

    if(listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ',' + amigo;
    }
    amigo = '';
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    embaralhar(amigos) 
    let sorteio = document.getElementById('lista-sorteio');
    
    if (amigos.length < 4) {
        alert('O número mínimo de amigos é 4!');
        return;
    }

    for (i = 0; i< amigos.length; i++) {
        if ( i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0];
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[ i + 1] + '<br>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}

