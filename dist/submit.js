"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSignInForm = validateSignInForm;
exports.validateLogInForm = validateLogInForm;

var _require = require("localforage"),
    setItem = _require.setItem;

var _require2 = require("localforage"),
    getItem = _require2.getItem;

var localforage = require("localforage");

function validateSignInForm() {
  var loginValue = form.elements.login.value;
  var passwordValue = form.elements.password.value;
  console.log("Submited");

  if (loginValue && passwordValue) {
    localforage.iterate(function (value, key, i) {
      if (loginValue === key) {
        console.log(key, value);
        return key;
      }
    }).then(function (key) {
      if (key) {
        var message = document.getElementById("signin-message");
        message.innerText = "This login is alreade exists " + key;
        setTimeout(function () {
          message.innerText = "";
        }, 2000);
      } else {
        setItem(loginValue, passwordValue).then(function () {
          var message = document.getElementById("signin-message");
          message.innerText = "Account for ".concat(loginValue, " created");
          setTimeout(function () {
            message.innerText = "";
          }, 2000);
        });
      }
    })["catch"](function (error) {
      console.log(error);
    });
  } else {
    var message = document.getElementById("signin-message");
    message.innerText = "Some fields are emty";
    setTimeout(function () {
      message.innerText = "";
    }, 2000);
    return false;
  }
}

function validateLogInForm() {
  var loginValue = form.elements.login.value;
  var passwordValue = form.elements.password.value;

  if (loginValue && passwordValue) {
    localforage.iterate(function (value, key, i) {
      if (loginValue === key && passwordValue === value) {
        console.log(key, value);
        return key;
      }
    }).then(function (key) {
      if (key) {
        var message = document.getElementById("login-message");
        message.innerText = "Welcome back " + key;
        setTimeout(function () {
          message.innerText = "";
        }, 2000);
      } else {
        var _message = document.getElementById("login-message");

        _message.innerText = "You credentials are wrong, sorry";
        setTimeout(function () {
          _message.innerText = "";
        }, 2000);
      }
    })["catch"](function (error) {
      console.log(error);
    });
  } else {
    var message = document.getElementById("login-message");
    message.innerText = "Some fields are emty";
    setTimeout(function () {
      message.innerText = "";
    }, 2000);
    return false;
  }
}