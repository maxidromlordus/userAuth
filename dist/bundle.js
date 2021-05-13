(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var form = document.querySelector(".signIn-form"); //form.addEventListener("submit", validateForm, false);

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
var loginForm = "<form onsubmit=\"event.preventDefault();\" class=\"signIn-form\" name=\"form\">\n  <label for=\"login\" class=\"label label-input\">Login:</label>\n  <input type=\"text\" name=\"login\"  id=\"login\"  pattern=\"[a-zA-Z0-9]+\" minlength=\"4\" maxlength=\"12\" /><br />\n  <label for=\"password\" class=\"label label-password\">Password:</label>\n  <input type=\"password\" name=\"password\" id=\"password\"/><br />\n  <input type=\"submit\" value=\"Login\" class=\"submit-input\"></input>\n</form>";
var signinForm = "<form onsubmit=\"event.preventDefault();\" class=\"signIn-form\" name=\"form\">\n  <label for=\"login\" class=\"label label-input\">Login:</label>\n  <input type=\"text\" name=\"login\"  id=\"login\"  pattern=\"[a-zA-Z0-9]+\" minlength=\"4\" maxlength=\"12\" /><br />\n  <label for=\"password\" class=\"label label-password\">Password:</label>\n  <input type=\"password\" name=\"password\" id=\"password\"/><br />\n  <input type=\"submit\" value=\"Signin\" class=\"submit-input\"></input>\n</form>";
loginFormDiv.innerHTML = loginForm;
signinFormDiv.innerHTML = signinForm; // console.log();
// Forms Event listeners.

loginWrapper.addEventListener("mouseenter", function () {
  if (loginWrapper.contains(pLoginText)) {
    loginWrapper.removeChild(pLoginText);
    loginWrapper.appendChild(loginFormDiv);
  }
});
loginWrapper.addEventListener("mouseleave", function () {
  var focused = document.activeElement === login;
  document.activeElement.blur();

  if (loginWrapper.contains(loginFormDiv) && !focused) {
    loginWrapper.removeChild(loginFormDiv);
    loginWrapper.appendChild(pLoginText);
  }
});
signinWrapper.addEventListener("mouseenter", function () {
  if (signinWrapper.contains(pSigninText)) {
    signinWrapper.removeChild(pSigninText);
    signinWrapper.appendChild(signinFormDiv);
  }
});
signinWrapper.addEventListener("mouseleave", function () {
  var focused = document.activeElement === login;
  console.log(focused);

  if (signinWrapper.contains(signinFormDiv) && !focused) {
    console.log("contains");
    signinWrapper.removeChild(signinFormDiv);
    signinWrapper.appendChild(pSigninText);
  }
}); //toolTip for formField listeners
// loginInput.addEventListener("mouseover", () => {
//   form.login.value = "4-12 characters";
//   console.log("over");
// });
// loginInput.addEventListener("mouseout", () => {
//   form.login.value = "";
// });

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
},{}]},{},[1]);
