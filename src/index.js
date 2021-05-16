import { validateLogInForm, validateSignInForm } from "./submit";

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

const loginForm = `<form onsubmit="event.preventDefault();" class="login-form" name="form">
  <label for="login" class="label label-input">Login:</label>
  <input type="text" name="login"  id="login"  pattern="[a-zA-Z0-9]+" minlength="4" maxlength="12" /><br />
  <label for="password" class="label label-password">Password:</label>
  <input type="password" name="password" id="password"/><br />
  <input type="submit" value="Login" class="submit-input"></input>
  <p class="message" id="login-message"></p>
</form>`;

const signinForm = `<form onsubmit="event.preventDefault();" class="signin-form" name="form">
  <label for="login" class="label label-input">Login:</label>
  <input type="text" name="login"  id="login"  pattern="[a-zA-Z0-9]+" minlength="4" maxlength="12" /><br />
  <label for="password" class="label label-password">Password:</label>
  <input type="password" name="password" id="password"/><br />
  <input type="submit" value="Signin" class="submit-input"></input>
  <p class="message" id="signin-message"></p>
</form>`;

loginFormDiv.innerHTML = loginForm;
signinFormDiv.innerHTML = signinForm;

// Forms Event listeners.
loginWrapper.addEventListener("mouseenter", () => {
  if (loginWrapper.contains(pLoginText)) {
    loginWrapper.removeChild(pLoginText);
    loginWrapper.appendChild(loginFormDiv);
    const form = document.querySelector(".login-form");
    form.addEventListener("submit", validateLogInForm, false);
  }
});

loginWrapper.addEventListener("mouseleave", () => {
  const loginInput = document.getElementById("login");
  let focused = document.activeElement === loginInput;
  if (loginWrapper.contains(loginFormDiv) && !focused) {
    loginWrapper.removeChild(loginFormDiv);
    loginWrapper.appendChild(pLoginText); //
  }
});

signinWrapper.addEventListener("mouseenter", () => {
  if (signinWrapper.contains(pSigninText)) {
    signinWrapper.removeChild(pSigninText);
    signinWrapper.appendChild(signinFormDiv);
    const form = document.querySelector(".signin-form");
    form.addEventListener("submit", validateSignInForm, false);
  }
});

signinWrapper.addEventListener("mouseleave", () => {
  let focused = document.activeElement === login;
  if (signinWrapper.contains(signinFormDiv) && !focused) {
    signinWrapper.removeChild(signinFormDiv);
    signinWrapper.appendChild(pSigninText);
  }
});
