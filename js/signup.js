var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
// To get Inputs
var btnSignup = document.getElementById("btnSignup");
// To get button
var formSignup = document.getElementById("formSignup");
// To get form
var successMassege = document.getElementById("successMassege");
var errorMassege = document.getElementById("errorMassege");
var exists = document.getElementById("exists");
// To get paragraphs
var nameRegex = /^[a-zA0-Z9]{3,}$/;
var emailRegex = /^[a-zA0-Z9]{3,}@[a-zA0-Z9]{3,}\.[a-zA0-Z9]{3,}$/;
var passwordRegex = /^[a-zA0-Z9]{3,}$/;
// Regex

var dataSignup = [];
if (localStorage.getItem("user")) {
  dataSignup = JSON.parse(localStorage.getItem("user"));
  console.log(dataSignup);
}
// store data

nameInput.addEventListener("input", function () {
  validate(nameInput, nameRegex.test(nameInput.value));
});

emailInput.addEventListener("input", function () {
  validate(emailInput, emailRegex.test(emailInput.value));
});

passwordInput.addEventListener("input", function () {
  validate(passwordInput, passwordRegex.test(passwordInput.value));
});
formSignup.addEventListener("submit", function (e) {
  e.preventDefault();

  var isValidName = validate(nameInput, nameRegex.test(nameInput.value));
  var isValidEmail = validate(emailInput, emailRegex.test(emailInput.value));
  var isValidPass = validate(
    passwordInput,
    passwordRegex.test(passwordInput.value)
  );
  if (isValidName && isValidEmail && isValidPass) {
    signUp();
    errorMassege.classList.replace("d-block", "d-none");
  } else {
    errorMassege.classList.replace("d-none", "d-block");
    successMassege.classList.replace("d-block", "d-none");
  }
});

function signUp() {
  if (isExists()) {
    successMassege.classList.replace("d-block", "d-none");
    exists.classList.replace("d-none", "d-block");
  } else {
    var userData = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    dataSignup.push(userData);
    localStorage.setItem("user", JSON.stringify(dataSignup));
    console.log(dataSignup);
    exists.classList.replace("d-block", "d-none");
    successMassege.classList.replace("d-none", "d-block");
    clear();
  }
}

function validate(input, condition) {
  if ((input, condition)) {
    return true;
  } else {
    return false;
  }
}

function clear() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function isExists() {
  for (i = 0; i < dataSignup.length; ++i) {
    if (
      dataSignup[i].email.toLowerCase() === emailInput.value.toLowerCase() ||
      dataSignup[i].password.toLowerCase() === passwordInput.value.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  }
}
