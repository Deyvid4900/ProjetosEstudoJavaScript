const p_temp=document.getElementById("p_temp")
const p_niv=document.getElementById("p_niv")
const p_press=document.getElementById("p_press")

const obterDados=()=>{
    const endpoint="https://cfbcursos.repl.co/"
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML="Temperatura"+dados.temperatura
        p_niv.innerHTML="Temperatura"+dados.nivel
        p_press.innerHTML="Temperatura"+dados.pressao
    })
}
obterDados()