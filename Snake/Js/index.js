const telaEscolhaNivel = document.getElementById("container")
const cabeca = document.getElementById("cabeça")
const AreaDeJogo = document.getElementById("AreaDeJogo")
const btnNivelUm = document.getElementById("b1")
const btnNivelDois = document.getElementById("b2")
const btnNivelTres = document.getElementById("b3")
const btnJogar = document.getElementById("btnJogar")
const tempoDeJogo = document.getElementById("tempo")


let t = 0
const tempoJogo = () => {
    tempoDeJogo.innerHTML = t
    t = t + 1
}
// const criarAleatorio = () => {

//     var randomLeft = Math.floor(Math.random() * 1000);
//     var randomTop = Math.floor(Math.random() * 1000);

//     var newDiv = document.createElement("div");

//     newDiv.className = "new-div";
//     newDiv.style.top = randomTop + "px";
//     newDiv.style.left = randomLeft + "px";
    
//     newDiv.setAttribute("class", "ObjPonto")

//     AreaDeJogo.appendChild(newDiv);
// }










btnJogar.addEventListener("click", () => {
    telaEscolhaNivel.setAttribute("class", "Apagado")
    cabeca.setAttribute("class", "Acesso")
    AreaDeJogo.setAttribute("class", "Acesso")
    setInterval(tempoJogo, 1000)
    // setInterval(criarAleatorio, 500)
})

