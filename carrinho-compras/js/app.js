function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    // Subtotal
    let preco = quantidade * valorUnitario;

    //carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x </span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
  </section>`

  valorTotal = valorTotal + preco;
  let campoValorTotal = document.getElementById('valor-total');
  campoValorTotal.textContent = `R$${valorTotal}`;
  document.getElementById('quantidade').value = '';

}
let valorTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 0;

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '';
}
