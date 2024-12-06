var emailLogin = document.getElementById("emailLogin");
var passwordLogin = document.getElementById("passwordLogin");
var successMassege = document.getElementById("successMassege");
var errorMassege = document.getElementById("errorMassege");
var formLogin = document.getElementById("formLogin");
var exists = document.getElementById("exists");
var btnLogin = document.getElementById("btnLogin");
var baseURL = ""; // Use this for dynamic redirection if needed

// Regular expressions for validation
var nameRegex = /^[a-zA-Z0-9]{3,50}$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordRegex = /^[a-zA-Z0-9]{3,50}$/;

// Load user data from localStorage
var dataSignup = JSON.parse(localStorage.getItem("user")) || [];

formLogin.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  var isValidEmail = checkInput(emailLogin, emailRegex.test(emailLogin.value));
  var isValidPass = checkInput(passwordLogin, passwordRegex.test(passwordLogin.value));

  if (isValidEmail && isValidPass) {
    login();
  } else {
    // Show the error message if validation fails
    errorMassege.classList.replace("d-none", "d-block");
    successMassege.classList.replace("d-block", "d-none");
  }
});

function login() {
  // Find the user in the dataSignup array
  var user = dataSignup.find(
    (user) => user.emailInput.toLowerCase() === emailLogin.value.toLowerCase()
  );

  if (user) {
    // Check if the password matches
    if (user.passwordInput === passwordLogin.value) {
      // Set user name in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      // Redirect to welcome page
      location.replace(baseURL + '/welcome.html');
    } else {
      // Incorrect password
      errorMassege.textContent = "Incorrect password.";
      errorMassege.classList.replace("d-none", "d-block");
    }
  } else {
    // Email not found
    location.href = "welcome.html"
  }
}

function checkInput(input, condition) {
  return condition;
}
