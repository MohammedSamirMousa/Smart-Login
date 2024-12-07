var emailLogin = document.getElementById("emailLogin");
var passwordLogin = document.getElementById("passwordLogin");
// To get Inputs
var successMassege = document.getElementById("successMassege");
var errorMassege = document.getElementById("errorMassege");
var exists = document.getElementById("exists");
// To get paragraphs
var emailRegex = /^[a-zA0-Z9]{3,}@[a-zA0-Z9]{3,}\.[a-zA0-Z9]{3,}$/;
var passwordRegex = /^[a-zA0-Z9]{3,}$/;
// Regex
var btnLogin = document.getElementById("btnLogin");
// To get button
var formLogin = document.getElementById("formLogin");
// To get form
var dataLogin = JSON.parse(localStorage.getItem("user")) || [];

emailLogin.addEventListener("input", function () {
  validate(emailLogin, emailRegex.test(emailLogin));
  console.log("hi");
});

passwordLogin.addEventListener("input", function () {
  validate(passwordLogin, passwordRegex.test(passwordLogin));
  console.log("yes");
});
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  var isValidEmail = validate(emailLogin, emailRegex.test(emailLogin.value));
  var isValidPass = validate(
    passwordLogin,
    passwordRegex.test(passwordLogin.value)
  );
  if (isValidEmail && isValidPass) {
    logIn();
    console.log("yes");
  } else {
    exists.classList.replace("d-block", "d-none");
    errorMassege.classList.replace("d-none", "d-block");
  }
});

function logIn() {
  if (isExists()) {
    location.href = "welcome.html";
  } else {
    exists.classList.replace("d-none", "d-block");
    errorMassege.classList.replace("d-block", "d-none");
  }
}

function validate(input, condition) {
  if ((input, condition)) {
    return true;
  } else {
    return false;
  }
}

function isExists() {
  for (i = 0; i < dataLogin.length; ++i) {
    if (
      dataLogin[i].email.toLowerCase() === emailLogin.value.toLowerCase() &&
      dataLogin[i].password.toLowerCase() === passwordLogin.value.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  }
}
