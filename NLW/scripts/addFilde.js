// document.querySelector('#container').style.backgroundColor = "red"
//     // Procurar o botão
document.querySelector("#add-time")
//     //Quando clicar no Botão
.addEventListener("click", cloneField)
//     //Executar uma ação
function cloneField(){
//     //duplicar os campos
//     //da onde vai duplicar os campos ?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
//     //pegar os campos
//     //quais campos ?
    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach(function(field){
        field.value = ""
    });
//     //colocar na pagina: Onde ?
//     //definir qual o local 
document.querySelector('#schedule-items').appendChild(newFieldContainer);
}


