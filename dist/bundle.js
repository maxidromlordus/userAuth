(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
