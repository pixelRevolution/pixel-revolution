import jogos from "./jogos.js";

function redirecionarParaDetalhes(game) {
    // Redireciona para uma página de detalhes com informações maiores
    window.location.href = `../../games-details/index.html?produto=${encodeURIComponent(JSON.stringify(game))}`;
}

document.addEventListener("DOMContentLoaded", function(){
    
    const JogosContentTabu = document.getElementById("categ-tabu");
    const errorGame = document.createElement("p");
    errorGame.textContent = "Ainda estamos em desenvolvimento, acompanhe nossa página no instagram e siganos para mais atualizaçõoes."
    errorGame.classList.add("erro-game");
    
    jogos.forEach(game => {

        if(game.tipo != "Tabuleiro"){

            JogosContentTabu.appendChild(errorGame);

        } else{

            JogosContentTabu.removeChild(errorGame);

            const gameElement = document.createElement("div");
            gameElement.classList.add("games");
            JogosContentTabu.appendChild(gameElement);

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

            const generoGame = document.createElement("p");
            generoGame.textContent = `Gênero: ${game.genero}`;
            divGame.appendChild(generoGame);
            generoGame.classList.add("genero-game")

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
        }

    });

});