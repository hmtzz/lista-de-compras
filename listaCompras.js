// Lista de produtos fixos
const produtos = ["Batom     R$30,00", "Base     R$45,00", "Delineador      R$11,00", "Sombra Paleta      R$40,00", "Tintas     R$50,00", "Base colorida      R$70,00", "Corretivo      R$25,00", "Pinceis     R$20,00"];

// Seleciona a UL
const lista = document.getElementById("produtosLista");

// Cria um <li> para cada produto
produtos.forEach(produto => {
  const li = document.createElement("li");
  li.textContent = produto;
  lista.appendChild(li);
});