import jogos from "./jogos.js";

function buscar(termo) {
    termo = termo.toLowerCase();
    const resultados = [];

    jogos.forEach((gameList) => {
      if (gameList.nome.toLowerCase().includes(termo)){
        resultados.push(gameList);
      }
    });

    return resultados;
}

function redirecionarParaDetalhes(gameList) {
  // Redireciona para uma página de detalhes com informações maiores
  window.location.href = `../games-details/index.html?produto=${encodeURIComponent(JSON.stringify(gameList))}`;
}

function exibirResultados(resultados) {
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';

    if (resultados.length === 0) {
    const ndEncontre = document.createElement('p');
    ndEncontre.textContent = "Nenhum resultado encontrado!"
    resultsList.appendChild(ndEncontre);
    } else {

        resultados.forEach((gameList) => {
        const listItem = document.createElement('div');
        listItem.classList.add('games');
        
        const imagemmenu = document.createElement('img');
        imagemmenu.src = gameList.image;
        imagemmenu.alt = gameList.nome;
        listItem.appendChild(imagemmenu);

        const divText = document.createElement('div');
        listItem.appendChild(divText);
    
        const nomemenu = document.createElement('h1');
        nomemenu.textContent = gameList.nome;
        divText.appendChild(nomemenu);
    
        const descricaomenu = document.createElement('p');
        descricaomenu.textContent = gameList.descricao;
        divText.appendChild(descricaomenu);
    
        const precomenu = document.createElement('h2');
        precomenu.textContent = `${gameList.preco}`;
        divText.appendChild(precomenu);

        const pesomenu = document.createElement('p');
        pesomenu.textContent = gameList.vercao;
        divText.appendChild(pesomenu);
        pesomenu.classList.add('vercao-game');
    
        resultsList.appendChild(listItem);

        listItem.addEventListener("click", () => {
          redirecionarParaDetalhes(gameList)
        });

        });
    }
}

// Extrai o termo de busca da URL
const termoDeBusca = new URLSearchParams(window.location.search).get('search');

// Verifica se há um termo de busca na URL e exibe os resultados
if (termoDeBusca) {
    const resultadosDaBusca = buscar(termoDeBusca);
    exibirResultados(resultadosDaBusca);
}