var nameInput = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
// To get inputs
var successMassege = document.getElementById("successMassege");
var errorMassege = document.getElementById("errorMassege");
var exists = document.getElementById("exists");
// To get paragraph
var btnSignup = document.getElementById("btnSignup");
// To get button
var formSignup = document.getElementById("formSignup");
// To get Form
var allInput = document.querySelectorAll("input");
// To get all inputs
var nameRegex = /^[a-zA0-Z9]{3,50}$/;
var emailRegex = /^[a-zA0-Z9]{3,50}@[a-zA0-Z9]{3,50}\.[a-zA0-Z9]{3,50}$/;
var passwordRegex = /^[a-zA-Z0-9]{3,50}$/;
// Regex

var arrSignup = []

if(localStorage.getItem("user")){
  arrSignup = JSON.parse(localStorage.getItem("user"))
  console.log(arrSignup);
  
}

nameInput.addEventListener("input", function () {
  checkInput(nameInput, nameRegex.test(nameInput.value));
});
// To validate (nameInput)

email.addEventListener("input", function () {
  checkInput(email, emailRegex.test(email.value));
});
// To validate (emailInput)

password.addEventListener("input", function () {
  checkInput(password, passwordRegex.test(password.value));
});
// To validate (passwordInput)

formSignup.addEventListener("submit", function (e) {
  e.preventDefault(); // Return <form> to defult value (Stop problems)

  //   Confirm validatiom
  var isValidName = checkInput(nameInput, nameRegex.test(nameInput.value));
  var isValidEmail = checkInput(email, emailRegex.test(email.value));
  var isValidPass = checkInput(password, passwordRegex.test(password.value));
  if (isValidName && isValidEmail && isValidPass) {
    // If the name , email and pass are valid the data will be submited
    signup();
  } else {
    // else shows errorMassage
    errorMassege.classList.replace("d-none", "d-block");
    successMassege.classList.replace("d-block", "d-none");
  }
});

function signup() {
  if (isEmailExist()) {
    // If the email was exist in localStorage that will be shown "Email is already exist"
    exists.classList.replace("d-none", "d-block");
    errorMassege.classList.replace("d-block", "d-none");
    successMassege.classList.replace("d-block", "d-none");
  } else {
    // Else the data will be pushed in the arr array
    var userDataSignup = {
      name: nameInput.value,
      emailInput: email.value,
      passwordInput: password.value,
    };
    arrSignup.push(userDataSignup)
    localStorage.setItem("user" , JSON.stringify(arrSignup))
    successMassege.classList.replace("d-none", "d-block");
    errorMassege.classList.replace("d-block", "d-none");
    exists.classList.replace("d-block", "d-none");
    clear();
    
  }
}

function checkInput(input, condition) {
  if (condition) {
    return true;
  } else {
    return false;
  }
}
// To check inputs if the users input's is valid in real time

// This func for clear inputs after submittion operation
function clear() {
  nameInput.value = "";
  email.value = "";
  password.value = "";
}
// To check if the email is exist or not by using for
function isEmailExist() {
  for (let i = 0; i < arrSignup.length; i++) {
    if (arrSignup[i].emailInput.toLowerCase() === email.value.toLowerCase()) {
      return true;
    }
  }
  return false;
}



