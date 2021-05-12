const form = document.querySelector(".signIn-form");
//form.addEventListener("submit", validateForm, false);
const loginInput = document.getElementById("login");
const loginPassword = document.getElementById("password");
const labelPassword = document.querySelector(".label-password");
const labelInput = document.querySelector(".label-input");
const wrapper = document.getElementById("wrapper");
const loginWrapper = document.getElementById("login-wrapper");
const signinWrapper = document.getElementById("signin-wrapper");
const pLoginText = document.getElementById("p-login");
const pSigninText = document.getElementById("p-signin");

const formWrapper = document.createElement("div");
const loginFormDiv = document.createElement("div");
const signinFormDiv = document.createElement("div");
loginFormDiv.id = "login-in";
signinFormDiv.id = "sign-in";

const loginForm = `<form onsubmit="event.preventDefault();" class="signIn-form" name="form">
  <label for="login" class="label label-input">Login:</label>
  <input type="text" name="login"  id="login"  pattern="[a-zA-Z0-9]+" minlength="4" maxlength="12" /><br />
  <label for="password" class="label label-password">Password:</label>
  <input type="password" name="password" id="password"/><br />
  <input type="submit" value="Login" class="submit-input"></input>
</form>`;

const signinForm = `<form onsubmit="event.preventDefault();" class="signIn-form" name="form">
  <label for="login" class="label label-input">Login:</label>
  <input type="text" name="login"  id="login"  pattern="[a-zA-Z0-9]+" minlength="4" maxlength="12" /><br />
  <label for="password" class="label label-password">Password:</label>
  <input type="password" name="password" id="password"/><br />
  <input type="submit" value="Signin" class="submit-input"></input>
</form>`;

loginFormDiv.innerHTML = loginForm;
signinFormDiv.innerHTML = signinForm;
// console.log();

// Forms Event listeners.
loginWrapper.addEventListener("mouseenter", () => {
  if (loginWrapper.contains(pLoginText)) {
    loginWrapper.removeChild(pLoginText);
    loginWrapper.appendChild(loginFormDiv);
  }
});

loginWrapper.addEventListener("mouseleave", () => {
  let focused = document.activeElement === login;
  document.activeElement.blur();
  console.log(focused);
  if (loginWrapper.contains(loginFormDiv) && !focused) {
    console.log("contains");
    loginWrapper.removeChild(loginFormDiv);
    loginWrapper.appendChild(pLoginText);
  }
});

signinWrapper.addEventListener("mouseenter", () => {
  if (signinWrapper.contains(pSigninText)) {
    signinWrapper.removeChild(pSigninText);
    signinWrapper.appendChild(signinFormDiv);
  }
});

signinWrapper.addEventListener("mouseleave", () => {
  let focused = document.activeElement === login;
  console.log(focused);
  if (signinWrapper.contains(signinFormDiv) && !focused) {
    console.log("contains");
    signinWrapper.removeChild(signinFormDiv);
    signinWrapper.appendChild(pSigninText);
  }
});

//toolTip for formField listeners

// loginInput.addEventListener("mouseover", () => {
//   form.login.value = "4-12 characters";
//   console.log("over");
// });

// loginInput.addEventListener("mouseout", () => {
//   form.login.value = "";
// });

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
