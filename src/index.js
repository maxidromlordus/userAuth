const form = document.querySelector(".signIn-form");
form.addEventListener("submit", validateForm, false);
const loginInput = document.getElementById("login");
const loginPassword = document.getElementById("password");
const labelPassword = document.querySelector(".label-password");
const labelInput = document.querySelector(".label-input");

//toolTip for formField listeners

loginInput.addEventListener("mouseover", () => {
  form.login.value = "4-12 characters";
  console.log("over");
});

loginInput.addEventListener("mouseout", () => {
  form.login.value = "";
});

function validateForm() {
  var loginValue = form.elements.login.value;
  const password = form.elements.password.value;
  if (loginValue) {
    console.log("form is valid");
    return true;
  } else {
    console.log("form is not valid");
    return false;
  }
}
