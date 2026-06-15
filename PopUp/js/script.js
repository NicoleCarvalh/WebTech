const btn = document.querySelector("#btn-popup");
const popup = document.querySelector(".popup-wrapper");

btn.addEventListener("click", event => {
  event.preventDefault();

  popup.classList.add("d-block");
  // popup.classList.toggle("d-block");

  popup.addEventListener("click", (event) => {
    // pega a classe do elemento que clicar
    const classOfClickElement = event.target.classList[0];

    const classNameListArray = ["popup-close", "popup-link", "popup-wrapper"]

    if(classNameListArray.includes(classOfClickElement)){
      popup.classList.remove("d-block");
    }

  })
})