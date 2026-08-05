const banner = document.querySelector(".banner");
const brothers = document.querySelector(".brothers");
const sisters = document.querySelector(".sisters");

brothers.addEventListener("click", () => {
  brothers.classList.remove("active");
  brothers.classList.add("inactive");

  sisters.classList.remove("inactive");
  sisters.classList.add("active");

  banner.style.backgroundImage = "url(./after-white-chicks.jpg)";
});

sisters.addEventListener("click", () => {
  sisters.classList.remove("active");
  sisters.classList.add("inactive");

  brothers.classList.remove("inactive");
  brothers.classList.add("active");

  banner.style.backgroundImage = "url(./b4-white-chicks.avif)";
});
