const { setItem } = require("localforage");
const { getItem } = require("localforage");
const localforage = require("localforage");

function validateSignInForm() {
  var loginValue = form.elements.login.value;
  const passwordValue = form.elements.password.value;
  console.log("Submited");
  if (loginValue && passwordValue) {
    localforage
      .iterate((value, key, i) => {
        if (loginValue === key) {
          console.log(key, value);
          return key;
        }
      })
      .then((key) => {
        if (key) {
          const message = document.getElementById("signin-message");
          message.innerText = "This login is alreade exists " + key;
          setTimeout(() => {
            message.innerText = "";
          }, 2000);
        } else {
          setItem(loginValue, passwordValue).then(() => {
            const message = document.getElementById("signin-message");
            message.innerText = `Account for ${loginValue} created`;
            setTimeout(() => {
              message.innerText = "";
            }, 2000);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    const message = document.getElementById("signin-message");
    message.innerText = `Some fields are emty`;
    setTimeout(() => {
      message.innerText = "";
    }, 2000);
    return false;
  }
}

function validateLogInForm() {
  var loginValue = form.elements.login.value;
  const passwordValue = form.elements.password.value;
  if (loginValue && passwordValue) {
    localforage
      .iterate((value, key, i) => {
        if (loginValue === key && passwordValue === value) {
          console.log(key, value);
          return key;
        }
      })
      .then((key) => {
        if (key) {
          const message = document.getElementById("login-message");
          message.innerText = "Welcome back " + key;
          setTimeout(() => {
            message.innerText = "";
          }, 2000);
        } else {
          const message = document.getElementById("login-message");
          message.innerText = "You credentials are wrong, sorry";
          setTimeout(() => {
            message.innerText = "";
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    const message = document.getElementById("login-message");
    message.innerText = `Some fields are emty`;
    setTimeout(() => {
      message.innerText = "";
    }, 2000);
    return false;
  }
}

export { validateSignInForm, validateLogInForm };
