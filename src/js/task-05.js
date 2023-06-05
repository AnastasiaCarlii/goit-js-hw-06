const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
    console.log("Користувач ввів порожній рядок!");
  } else {
    nameOutput.textContent = inputValue;
    console.log(`Користувач ввів дані: ${inputValue}`);
  }
});
