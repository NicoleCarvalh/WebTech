const inputNota = document.getElementById("nota");
const inputNome = document.getElementById("nome");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");




function resultadoNotaClick(event){
  event.preventDefault();

  

  if(inputNota.value == ""){
    resultado.innerHTML = `<span id="message" style="display: block;">O valor não pode ser vazio</span>`

  } else if (inputNota.value >= 6) {
    resultado.innerHTML = `<span id="message" style="display: block; color: #42f545;">${inputNome.value} foi aprovado</span>`
    
  } else {
    resultado.innerHTML = `<span id="message" style="display: block; color: #ff0909; background-color: #fff;">${inputNome.value} foi reprovado</span>`

  }

  
  
}