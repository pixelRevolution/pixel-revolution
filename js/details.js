// detalhes.js
document.addEventListener('DOMContentLoaded', function () {
    const detalhesProduto = document.getElementById('detalhes-produto');
  
    // Obtém os parâmetros da URL para obter o produto selecionado
    const params = new URLSearchParams(window.location.search);
    const produtoJson = params.get('produto');
    const produto = JSON.parse(decodeURIComponent(produtoJson));
  
    // Exibe as informações detalhadas do produto
    const divDetalhes = document.createElement('div');
    divDetalhes.classList.add('detalhes-game');

    const imgGame = document.createElement('img');
    imgGame.src = produto.image;

    const divGame = document.createElement('div');
    divGame.classList.add('game-div');
  
    const nomeProduto = document.createElement('h1');
    nomeProduto.textContent = produto.nome;

    const descGame = document.createElement('p');
    descGame.textContent = `Descrição: ${produto.descricao}`;
  
    const precoProduto = document.createElement('h2');
    precoProduto.textContent = produto.preco;

    const vercaoGame = document.createElement('p');
    vercaoGame.textContent = `Versão: ${produto.vercao}`;
    vercaoGame.classList.add('vercao-game');

    const btnGame = document.createElement('div');
    btnGame.innerHTML = `<a href="#" download="#" class"download-game">Fazer o download</a>`
    btnGame.classList.add('btns-game');

    const generogame = document.createElement('p');
    generogame.textContent = `Gênero: ${produto.genero}`
    generogame.classList.add('genero-game');
  
    divDetalhes.appendChild(imgGame)
    divDetalhes.appendChild(divGame);
    divGame.appendChild(nomeProduto);
    divGame.appendChild(descGame);
    divGame.appendChild(generogame);
    if(produto.tipo === "2D" || produto.tipo === "3D"){
      divGame.appendChild(precoProduto);
      divGame.appendChild(btnGame);
      divGame.appendChild(vercaoGame);
    }
    detalhesProduto.appendChild(divDetalhes);
  });
  
  function voltar() {
    window.location.href = "../"
  }