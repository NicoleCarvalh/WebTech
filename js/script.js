const name = document.querySelector("#name");
const button = document.querySelector("button");
const list = document.querySelector(".lista")

button.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(name.value)
})