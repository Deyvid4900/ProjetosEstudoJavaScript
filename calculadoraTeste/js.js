let primeiroValor = (document.querySelector("#primeiroValor")).value
let segundoValor = (document.querySelector("#segundoValor")).value


let destacado=0

const opr_soma = document.querySelector("#soma")
const opr_sub = document.querySelector("#sub")
const opr_div = document.querySelector("#div")
const opr_mult = document.querySelector("#mult")

const opr = [opr_soma, opr_sub, opr_div, opr_mult]

const executar_conta = document.getElementById("operar")

const resultado = document.getElementById("result")

// const selecionado=(el)=>{
//  el.addEventListener("click",(evt)=>{
//     const novaClass=setAttribute("class",".destacado") 
//  })
// }

let valor1=primeiroValor
let valor2=segundoValor
let valoresCalculo = [valor1,valor2]


const calculos = [
    (val) => {
        // soma
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    },
    (val) => {
        // subtração
        let res = 1
        for (v of val) {
            res -= v
        }
        return res
    },
    (val) => {
        // div
        let res = 2
        for (v of val) {
            res /= v
        }
        return res
    },
    (val) => {
        // mult
        let res = 3
        for (v of val) {
            res *= v
        }
        return res
    },
]



executar_conta.addEventListener("click", (evt) => {
    let indc=0
    const d =[2,3]
    // console.log(calculos[indc](valoresCalculo))
    console.log(valoresCalculo)
})

