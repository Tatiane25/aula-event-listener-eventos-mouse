let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarDom(){
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}
atualizarDom()
//---------variavéis ---------//

let btnAddProduto01 = document.querySelector('#btn-adicionar-produto-01')
let quantidadeProduto01 = document.querySelector('#quantidade-produto-01')
let btnSbtProduto02 = document.querySelector('#btn-subtrair-produto-01')
let quantidadeProduto02 = document.querySelector('#quantidade-produto-01')
let valorProduto = 11.66

//----------funções----------//

function adicionarUm(){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1
  subtotalInfo.valor = subtotalInfo.valor + valorProduto
  atualizarDom()
}

function subtrairUm(){
  if(quantidadeProduto02.value > 0){
  quantidadeProduto02.value = Number(quantidadeProduto02.value) - 1
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1
  subtotalInfo.valor = subtotalInfo.valor - valorProduto
  atualizarDom()
}
}



//----------eventos-----------//

btnAddProduto01.addEventListener('click',adicionarUm)

btnSbtProduto02.addEventListener('click',subtrairUm)

