const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert("Усі поля повинні бути заповнені.");
    return;
  }

  const formData = {
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
  };

  console.log(formData);
  //form.reset();
});
//console.log(form);
