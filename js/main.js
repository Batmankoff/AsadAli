const languageItem = document.querySelector(".language__item");
const language = document.querySelector(".language");

languageItem.addEventListener("click", function () {
  languageItem.classList.toggle("visible");
});

document.addEventListener("click", function (event) {
  if (
    !language.contains(event.target) &&
    languageItem.classList.contains("visible")
  ) {
    languageItem.classList.remove("visible");
  }
});
