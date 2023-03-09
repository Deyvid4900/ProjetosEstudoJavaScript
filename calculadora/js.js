const opr_soma = document.getElementById("#soma")
const opr_sub = document.querySelector("#sub")
const opr_div = document.querySelector("#div")
const opr_mult = document.querySelector("#mult")
let res = document.getElementById("result")

const calculos = [
    () => {
        // soma
        const val=[document.getElementById("primeiroValor").value,document.getElementById("segundoValor").value]
        res.value=Number(val[0])+Number(val[1])
        
    },
    () => {
        // subtração
        const val=[document.getElementById("primeiroValor").value,document.getElementById("segundoValor").value]
        resultado.value=Number(val[0])-Number(val[1])
    },
    () => {
        // div
        const val=[document.getElementById("primeiroValor").value,document.getElementById("segundoValor").value]
        resultado.value=Number(val[0])/Number(val[1])
    },
    () => {
        // mult
        const val=[document.getElementById("primeiroValor").value,document.getElementById("segundoValor").value]
        resultado.value=Number(val[0])*Number(val[1])
    }
]

opr_soma.addEventListener("click",()=>{
    res.innerHTML="O Resultado é:" + calculos[0]
})