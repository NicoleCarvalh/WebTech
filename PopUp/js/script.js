const btn = document.querySelector("#btn-popup");
const popup = document.querySelector(".popup-wrapper");
const page = document.querySelector(".page");



btn.addEventListener("click", (event) => {
  event.preventDefault();

  page.classList.toggle("disabled");
  popup.classList.toggle("d-block");

  // popup.classList.add("d-block");

  popup.addEventListener("click", (event) => {
    const classOfClickElement = event.target.classList[0];

    const classArray = ["popup-close", "popup-link", "popup-wrapper"];

    for (let i = 0; i < classArray.length; i++) {
      if (classOfClickElement == classArray[i]) {
        popup.classList.remove("d-block");
        page.classList.toggle("disabled");
      }
    }
  });
});
