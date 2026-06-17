const listaValores = document.querySelector("#listaValores");

carregarValoresSalvos();

function carregarValoresSalvos() {
  listaValores.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);

    if (chave.startsWith("V")) {
      const valor = localStorage.getItem(chave);
      const listItem = document.createElement("li");
      listItem.textContent = valor;

      listaValores.appendChild(listItem);
    }
  }
}

// const times = ["Bangu", "Santos", "Palmeiras"];

// for (let index = 0; index < times.length; index++) {

//   console.log("Times: " + index + times[index])
// }
