
const todas_div=[...document.querySelectorAll(".curso")]
const c1=document.getElementById("c1")

todas_div.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML+" foi clicado")
    })
})

// console.log(todas_div)
// c1.addEventListener("click",(evt)=>{
   
// })