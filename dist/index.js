"use strict";

var _submit = require("./submit");

var loginInput = document.getElementById("login");
var loginPassword = document.getElementById("password");
var labelPassword = document.querySelector(".label-password");
var labelInput = document.querySelector(".label-input");
var wrapper = document.getElementById("wrapper");
var loginWrapper = document.getElementById("login-wrapper");
var signinWrapper = document.getElementById("signin-wrapper");
var pLoginText = document.getElementById("p-login");
var pSigninText = document.getElementById("p-signin");
var formWrapper = document.createElement("div");
var loginFormDiv = document.createElement("div");
var signinFormDiv = document.createElement("div");
loginFormDiv.id = "login-in";
signinFormDiv.id = "sign-in";
var loginForm = "<form onsubmit=\"event.preventDefault();\" class=\"login-form\" name=\"form\">\n  <label for=\"login\" class=\"label label-input\">Login:</label>\n  <input type=\"text\" name=\"login\"  id=\"login\"  pattern=\"[a-zA-Z0-9]+\" minlength=\"4\" maxlength=\"12\" /><br />\n  <label for=\"password\" class=\"label label-password\">Password:</label>\n  <input type=\"password\" name=\"password\" id=\"password\"/><br />\n  <input type=\"submit\" value=\"Login\" class=\"submit-input\"></input>\n  <p class=\"message\" id=\"login-message\"></p>\n</form>";
var signinForm = "<form onsubmit=\"event.preventDefault();\" class=\"signin-form\" name=\"form\">\n  <label for=\"login\" class=\"label label-input\">Login:</label>\n  <input type=\"text\" name=\"login\"  id=\"login\"  pattern=\"[a-zA-Z0-9]+\" minlength=\"4\" maxlength=\"12\" /><br />\n  <label for=\"password\" class=\"label label-password\">Password:</label>\n  <input type=\"password\" name=\"password\" id=\"password\"/><br />\n  <input type=\"submit\" value=\"Signin\" class=\"submit-input\"></input>\n  <p class=\"message\" id=\"signin-message\"></p>\n</form>";
loginFormDiv.innerHTML = loginForm;
signinFormDiv.innerHTML = signinForm; // Forms Event listeners.

loginWrapper.addEventListener("mouseenter", function () {
  if (loginWrapper.contains(pLoginText)) {
    loginWrapper.removeChild(pLoginText);
    loginWrapper.appendChild(loginFormDiv);
    var form = document.querySelector(".login-form");
    form.addEventListener("submit", _submit.validateLogInForm, false);
  }
});
loginWrapper.addEventListener("mouseleave", function () {
  var loginInput = document.getElementById("login");
  var focused = document.activeElement === loginInput;

  if (loginWrapper.contains(loginFormDiv) && !focused) {
    loginWrapper.removeChild(loginFormDiv);
    loginWrapper.appendChild(pLoginText); //
  }
});
signinWrapper.addEventListener("mouseenter", function () {
  if (signinWrapper.contains(pSigninText)) {
    signinWrapper.removeChild(pSigninText);
    signinWrapper.appendChild(signinFormDiv);
    var form = document.querySelector(".signin-form");
    form.addEventListener("submit", _submit.validateSignInForm, false);
  }
});
signinWrapper.addEventListener("mouseleave", function () {
  var focused = document.activeElement === login;

  if (signinWrapper.contains(signinFormDiv) && !focused) {
    signinWrapper.removeChild(signinFormDiv);
    signinWrapper.appendChild(pSigninText);
  }
});