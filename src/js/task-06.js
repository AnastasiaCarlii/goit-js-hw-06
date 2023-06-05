const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", checkValidation);

function checkValidation(event) {
  const input = event.target;
  const inputLength = input.dataset.length;
  const inputValue = input.value.trim().length;

  if (inputValue === Number(inputLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    console.log(`Користувач ввів правильні дані: ${inputValue}`);
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    console.log(`Користувач ввів неправильні дані: ${inputValue}`);
  }
}
