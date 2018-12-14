let botaoVerde = document.querySelector(".sim");
let diaEscolhido = document.querySelector(".pintarVerde");
let botoesDesafio = document.querySelector(".botoesDesafio");
let desafioConcluido = document.querySelector(".desafioConcluido");
let mudarMedalha = document.querySelector(".mudarMedalha");
let medalhaAntiga = document.querySelector(".medalhaAntiga");


botaoVerde.addEventListener("click", () =>{
    diaEscolhido.classList.add("ficarVerde");
    botoesDesafio.style.display = 'none';
    desafioConcluido.style.display = 'flex';
    mudarMedalha.style.display = 'flex';
    medalhaAntiga.style.display = 'none';
})


