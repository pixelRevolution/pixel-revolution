import jogos from "./jogos.js";

function redirecionarParaDetalhes(game) {
    // Redireciona para uma página de detalhes com informações maiores
    window.location.href = `./games-details/index.html?produto=${encodeURIComponent(JSON.stringify(game))}`;
}

document.addEventListener("DOMContentLoaded", function(){
    
    const jogosContent = document.getElementById("jogos-div");

    jogos.forEach(game => {

        const gameElement = document.createElement("div");
        gameElement.classList.add("games");
        jogosContent.appendChild(gameElement);

        const imagemGame = document.createElement("img");
        imagemGame.src = game.image;
        imagemGame.alt = game.nome;
        gameElement.appendChild(imagemGame);

        const divGame = document.createElement("div");
        divGame.classList.add("text-game")
        gameElement.appendChild(divGame);

        const descGame = document.createElement("p");
        descGame.textContent = game.descricao;
        divGame.appendChild(descGame);

        const precoGame = document.createElement("h2");
        precoGame.textContent = game.preco;
        divGame.appendChild(precoGame);

        const vercaoGame = document.createElement("p");
        vercaoGame.textContent = game.vercao;
        divGame.appendChild(vercaoGame);
        vercaoGame.classList.add("vercao-game");

        gameElement.addEventListener("click", () => {
            redirecionarParaDetalhes(game)
        });

    });

});