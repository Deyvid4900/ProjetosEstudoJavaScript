const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQl", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")

cursos.map((el, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((ele, indice, arr) => {
        return ele.checked
    })
    return radioSelecionado[0]
}


btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    console.log(rs)
    if (rs !== undefined) {

        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        alert("Curso Selecionado: " + cursoSelecionado)
        console.log(cursoSelecionado)
    } else {
        alert("Selecione um curso ")
    }


})


// minha tentativa pra adicionar

const addCurso = document.getElementById("btnAdicionarNovoCurso")


addCurso.addEventListener("click", (el, chave) => {
    let inputCurso = document.getElementById("nomeCurso")

    inputCurso = inputCurso.value

    if (inputCurso != "") {
        const novoElemento = document.createElement("div")

        novoElemento.setAttribute("id", "c" + chave)
        novoElemento.setAttribute("class", "curso c1")
        novoElemento.innerHTML = inputCurso

        const comandos = document.createElement("div")
        comandos.setAttribute("class", "comandos")

        const rb = document.createElement("input")
        rb.setAttribute("type", "radio")
        rb.setAttribute("name", "rb_curso")

        comandos.appendChild(rb)

        novoElemento.appendChild(comandos)

        caixaCursos.appendChild(novoElemento)
        alert("Curso " + inputCurso + " adicionado")
    }else{
        alert("Digite algo para Adicionar")
    }
})

// minha tentativa de remover elemento

const btnRemoverCurso = document.getElementById("btnRemoverCurso")



btnRemoverCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    
    if (rs !== undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        console.log(cursoSelecionado)
        cursoSelecionado.remove()
    } else {
        alert("Selecione um Curso ")
    }

})