const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=["html","css","java"]
p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor Nao encontrado"
    const ret=elementos_array.find((e,i)=>{
        
        i=i+1
        if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML="Valor encontrado "+ e +" na posição "+ i
            return e
        }
    })
    console.log(ret)
})