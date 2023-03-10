
// declarações de Variáveis

const telaEscolhaNivel = document.getElementById("container")
const cabeca = document.getElementById("cabeça")
const AreaDeJogo = document.getElementById("AreaDeJogo")
const btnNivelUm = document.getElementById("b1")
const btnNivelDois = document.getElementById("b2")
const btnNivelTres = document.getElementById("b3")
const btnJogar = document.getElementById("btnJogar")
const tempoDeJogo = document.getElementById("tempo")

const areaDeAtuacao = document.getElementById("AreaDeAtuacao")
const larguraAreaDeAtuacao = areaDeAtuacao.offsetWidth;
const alturaAreaDeAtuacao = areaDeAtuacao.offsetHeight;

const personagem = document.getElementById("Personagem")


const aside = document.getElementById("aside")
const btnUp = document.getElementById("up")
const btnLeft = document.getElementById("left")
const btnRight = document.getElementById("right")
const btnDown = document.getElementById("down")



let move=false

//  Movimento
btnUp.addEventListener("click", () => {

    const addPx = () => {
        let posicaoAtual = parseInt(personagem.style.bottom, 10) || 0

        personagem.style.bottom = posicaoAtual + 5 + "px";
        

    }
    if (move == false) {
        setInterval(addPx, 50)
     
    }
    

})



btnLeft.addEventListener("click", () => {

    const addPx = () => {
        let posicaoAtual = parseInt(personagem.style.left, 10) || 0

        personagem.style.left = posicaoAtual - 5 + "px";
    }
    if (move == false) {
        setInterval(addPx, 50)
        
    }
})



btnRight.addEventListener("click", () => {


    const addPx = () => {
        let posicaoAtual = parseInt(personagem.style.left, 10) || 0

        personagem.style.left = posicaoAtual + 5 + "px";
    }
    if (move == false) {
        setInterval(addPx, 50)
       
    }
})



btnDown.addEventListener("click", () => {


    const addPx = () => {
        let posicaoAtual = parseInt(personagem.style.bottom, 10) || 0
        personagem.style.bottom = posicaoAtual - 5 + "px";


    }
    if (move == false) {
        setInterval(addPx, 50)
        
    }

})






// ticks

let t = 0
const tempoJogo = () => {
    tempoDeJogo.innerHTML = t
    t = t + 1
}






// Niveis do jogo

btnNivelUm.addEventListener("click", () => {
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    aside.setAttribute("class", "Acesso")
    setInterval(tempoJogo, 1000)
    // setInterval(criarAleatorio, 500)
    console.log(larguraAreaDeAtuacao)
    console.log(alturaAreaDeAtuacao)
})
btnNivelDois.addEventListener("click", () => {
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    aside.setAttribute("class", "Acesso")
    setInterval(tempoJogo, 1000)
    // setInterval(criarAleatorio, 500)
    console.log(larguraAreaDeAtuacao)
    console.log(alturaAreaDeAtuacao)
})
btnNivelTres.addEventListener("click", () => {
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    aside.setAttribute("class", "Acesso")
    setInterval(tempoJogo, 1000)
    // setInterval(criarAleatorio, 500)
    console.log(larguraAreaDeAtuacao)
    console.log(alturaAreaDeAtuacao)
})

btnJogar.addEventListener("click", () => {
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    aside.setAttribute("class", "Acesso")
    setInterval(tempoJogo, 1000)
    // setInterval(criarAleatorio, 500)
    console.log(larguraAreaDeAtuacao)
    console.log(alturaAreaDeAtuacao)
})


//Classes 
