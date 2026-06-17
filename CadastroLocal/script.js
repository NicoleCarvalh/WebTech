const btnSalvar = document.querySelector("#salvar");
const campo = document.querySelector("#campo");

btnSalvar.addEventListener("click", (e) => {
  e.preventDefault();

  let valor = campo.value;

  if (valor.trim() == "") {
    alert("O campo não pode ser vazio.");
    return;
  }


  const chave = `ValorSalvo_${Date.now()}`;

  console.log(chave)

  localStorage.setItem(chave, valor);

  valor = "";
});
