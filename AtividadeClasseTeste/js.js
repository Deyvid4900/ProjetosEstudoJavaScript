let numeros_Objetos_Display = document.getElementById("Numeros_objetos")
// const quantidade_Objetos=document.getElementById("quantidade_objetos")
const btn_adicionar = document.getElementById("btn_adicionar")
const btn_remover = document.getElementById("btn_remover")
const display_obj = document.getElementById("display_obj")


let cont = 0
let Objetos = []
const removerObje = (qmRemover) => {
    Objetos = Objetos.filter((el) => {

        return el.nome != qmRemover
    })
}

class Objeto {
    constructor(cor, velocidade, tamanho) {
        this.cor = cor
        this.tamanho = tamanho
        this.velocidade = velocidade
    }
    setTamanho(tamanho){
        this.tamanho=tamanho
    }
}


btn_adicionar.addEventListener("click", () => {
    gerenciar_aleatoriedade()

    cont += 1
    console.log(Objetos)
    Objetos.map((c) => {

        const div = document.createElement("div")

        switch (div.hasAttribute("")) {
            case o.tamanho == "objP":

                div.setAttribute("class", o.tamanho)
                div.setAttribute("id", "cir")
                break;
            case o.tamanho == "objM":

                div.setAttribute("class", o.tamanho)
                div.setAttribute("id", "cir")
                break;
            case o.tamanho == "objG":

                div.setAttribute("class", o.tamanho)
                div.setAttribute("id", "cir")
                break;
            case o.tamanho == "objGG":

                div.setAttribute("class", o.tamanho)
                div.setAttribute("id", "cir")
                break;




        }
        







        display_obj.appendChild(div)
    })

})
btn_remover.addEventListener("click", (evt) => {
    let cnt = 0
    while (cnt < cont) {
        Objetos.pop(Objetos[1])
        const div_cir = document.getElementById("cir")
        div_cir.remove("id", "cir")
        cnt++

    }
})


const gerenciar_aleatoriedade = () => {


    //define a cor aleatoria para o objeto

    const cores = ["azul", "verde", "amarelo", "vermelho"]
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)]


    // define a velocidade do objeto
    const velocidade = [0, 1, 2]
    let vel = velocidade[Math.floor(Math.random() * velocidade.length)]


    //define o tamanho do objeto

    const tamanho = [ "objP","objM", "objG", "objGG"]
    let tam = tamanho[Math.floor(Math.random() * tamanho.length)]



    const o = new Objeto(corAleatoria, vel, tam)
    o.setTamanho(tam)
    const classe = o.tamanho
    console.log(classe)

    display_obj.innerHTML = ""

    const gerenciar=()=>{
        Objetos.map((c) => {

        const div = document.createElement("div")

        switch (div.hasAttribute("")) {
            case o.tamanho == "objP":

                div.setAttribute("class", o.tamanho)
                div.setAttribute("id", "cir")
                break;
            case o.tamanho == "objM":

                div.setAttribute("class", o.tamanho)
                div.setAttribute("id", "cir")
                break;
            case o.tamanho == "objG":

                div.setAttribute("class", o.tamanho)
                div.setAttribute("id", "cir")
                break;
            case o.tamanho == "objGG":

                div.setAttribute("class", o.tamanho)
                div.setAttribute("id", "cir")
                break;




        }
        







        display_obj.appendChild(div)
    })
    }
    Objetos.push(o)

}



