const idades=[15,21,30,17,18,44,12,50]


// const filtroMaior18 = (valor,indice,array)=>{
// }

const maior_18 = (valor)=>{
    if (valor >= 18) {
        return valor
    }
}
const maior=idades.filter((val)=>{
    if (val >= 18) {
        return val
    }
})
const menor=idades.filter((val)=>{
    if (val < 18) {
        return val
    }
})
console.log(idades)
console.log(maior)
console.log(menor)