const botao = document.querySelector("#btnRevelar");
const texto = document.querySelector("#resposta")

botao.addEventListener("click", (ev) => {
  ev.preventDefault();

  texto.innerHTML = "O JavaScript deixa as páginas dinâmicas!"

  botao.classList.toggle("inativo")
})