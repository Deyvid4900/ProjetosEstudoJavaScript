const f_nome=document.querySelector("f_nome")
const f_nota=document.querySelector("f_nota")
const f_msg=document.querySelector("f_msg")

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let msg=null

    if (!f_nota.checkValidity()) {
        msg=f_nota.validationMessage
    }

    f_msg.innerHTML=msg
    evt.preventDefault
})




// Métodos de validação do DOM
// checkValidity()
// setCustomValidity()

//Propriedade de Validação do DOM 
// validity
// validationMessage

// Propriedades de validação
/* 
CustomError:true, se uma mensagem de validação personalizada for definida.

patternMismatch:true,se o valor de um elemento não corresponder ao seu atributo padrão.

rangeOverFlow:true,se o valor de um elemento for maior que seu atributo max.

rangeUnderFlow:true,se o valor deum elemento for menor que seu atributo min.

stepMismatch:true, se o valor de um elemento for inválido por seu atributo step.

toolong:true, se o valor de um elemento exceder seu atributo maxlength.

typeMismatch:true,se o valor de um elemento for inválido por seu atributo type.

valueMissing:true,se um elemento (com um atributo obrigatório) não tiver valor.

valid:true,se o valor de um elemento for válido.

*/
