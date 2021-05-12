"use strict";

var form = document.querySelector(".signIn-form");
form.addEventListener("submit", validateForm, false);
var loginInput = document.getElementById("login");
var loginPassword = document.getElementById("password");
var labelPassword = document.querySelector(".label-password");
var labelInput = document.querySelector(".label-input"); //toolTip for formField listeners

loginInput.addEventListener("mouseover", function () {
  form.login.value = "4-12 characters";
  console.log("over");
});
loginInput.addEventListener("mouseout", function () {
  form.login.value = "";
});

function validateForm() {
  var loginValue = form.elements.login.value;
  var password = form.elements.password.value;

  if (loginValue) {
    console.log("form is valid");
    return true;
  } else {
    console.log("form is not valid");
    return false;
  }
}