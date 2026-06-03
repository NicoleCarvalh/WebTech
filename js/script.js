const name = document.querySelector("#name");
const button = document.querySelector("button");
const list = document.querySelector(".list")

button.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = name.value;
  const templateHTML = `<li>${inputValue}</li>`;

  name.value = '';

  list.innerHTML += templateHTML;
  
})