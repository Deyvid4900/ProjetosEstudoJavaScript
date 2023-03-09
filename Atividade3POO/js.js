const f_nome = document.getElementById("f_nome")
const f_portas = document.getElementById("f_portas")
const f_blindagem = document.getElementById("f_blindagem")
const f_municao = document.getElementById("f_municao")
const f_tipo = document.getElementById("f_tipo")
const f_tipoMilitar = document.getElementById("f_tipoMilitar")
const f_tipoNormal = document.getElementById("f_tipoNormal")
const btn_add = document.getElementById("btn_addCarro")
const carros = document.getElementById("localCarros")

let a_carros = []

const removerCarro=(qmRemover)=>{
    a_carros=a_carros.filter((el)=>{

        return el.nome!=qmRemover
    })
}

class Carro{
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setcor=function(cor){
        this.cor=cor
    }
}
class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setcor("Verde")
    }
}

f_tipoMilitar.addEventListener("click", (evt) => {
    f_blindagem.value = 0
    f_municao.value = 0
    f_nome.value=""
    f_portas.value=0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
f_tipoNormal.addEventListener("click", (evt) => {
    f_blindagem.value = 0
    f_municao.value = 0
    f_nome.value=""
    f_portas.value=0
    f_blindagem.setAttribute("disabled")
    f_municao.setAttribute("disabled")
})





const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""

    // mostra todos os carros do array 
    a_carros.forEach((c) => {
        const div = document.createElement("div")
        const btn=document.createElement("button")
        btn.addEventListener("click",(evt)=>{
            const qmRemover=evt.target.parentNode.dataset.nome
            removerCarro(qmRemover)
            alert("O carro foi removido")
            gerenciarExibicaoCarros()
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome",c.nome)

        div.innerHTML =`Nome: ${c.nome}<br>`
        div.innerHTML += `Portas: ${c.portas}<br>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br>`
        div.innerHTML += `Munição: ${c.municao}<br>`
        div.innerHTML += `Cor: ${c.cor}<br><br>`
        btn.innerHTML="Remover"
        carros.appendChild(div)
        div.appendChild(btn)
    })

}


btn_add.addEventListener("click",()=>{
    if(f_tipoNormal.checked){
        const c=new Carro(f_nome.value,f_portas.value)
        a_carros.push(c)
    }else{
        const c=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
        a_carros.push(c)
    }
    
    gerenciarExibicaoCarros()
})




