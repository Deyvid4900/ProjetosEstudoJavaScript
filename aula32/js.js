const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosc1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementsByClassName("curso")[6]
console.log(cursoEspecial)
console.log(cursosc1)
console.log(cursosc2)

cursosc2.map((e,i)=>{
    e.classList.add("destaque")
})

