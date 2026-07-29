const paises = [
  "Brasil",
  "Alemanha",
  "França",
  "Canadá",
  "Japão",
  "EUA",
  "México",
  "Catar",
  "China",
];
const lista = document.getElementById("listaPaises");
const cont = document.getElementById("cont");

function listarPaises() {
  lista.innerHTML = "";

  for (let i = 0; i < paises.length; i++) {
    lista.innerHTML += "<li>" + paises[i] + "</li>";
  }

  cont.innerText = `${paises.length}`;
}
