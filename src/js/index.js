/*
OBJETIVO 1 -  QUANDO USÚARIO CLICAR NO BOTÃO DE VEJA O TRAILER, DEVEMOS ABRIR A MODAL COM O VIDEO DO TRAILER

OBJETIVO 2 - QUANDO O USÚARIRO CLICA NO x DEVEMOS FECHAR A MODAL


OBJETIVO 1 -  QUANDO USUÀRIO CLICAR NO BOTÃO DE VEJA O TRAILER, DEVEMOS ABRIR A MODAL COM O VIDEO DO TRAILER
     - PASSO 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
     - PASSO 2 - dar um jeito de indentificar quando usuário clica no botão
     - PASSO 3 - dar um jeito de pegar os elementos da modal no js
     - PASSO 4 - abrir modal na tela
     

    OBJETIVO 2 - QUANDO O USUÁRIO CLICAR NO x DEVEMOS FECHAR A MODAL
      - PASSO 1 - dar um jeito de pega o elemento de fechar modal usando o js
      - passo 2 - dar um jeito de identificar quando o usuário clicar no X
      - PASSO 3 - fechar modal
 */

const botaoTrailer = document.querySelector(".botao");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto"); 
}
// OB1 PASSO 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
// const botaoTrailer = document.querySelector(".botao");


//OB1 - PASSO 2 - dar um jeito de indentificar quando usuário clica no botão
botaoTrailer.addEventListener("click", () =>{
    // OB1 PASSO 4 - abrir modal na tela
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});
//OB1 PASSO 3 - dar um jeito de pegar os elementos da modal no js
 // const modal = document.querySelector(".modal");

//OBJETIVO 2 - QUANDO O USUÁRIO CLICAR NO x DEVEMOS FECHAR A MODAL
//PASSO 1 - dar um jeito de pega o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");
//passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    //PASSO 3 - fechar modal
    alternarModal();
    video.setAttribute("src", "");
});

// const linkDoVideo = "./src/video/trailer.mp4"
// const video = document.getElementById("video");






