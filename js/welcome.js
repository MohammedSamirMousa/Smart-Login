var nameContainer = document.querySelector("h1")
var logoutBtn = document.getElementById("logoutBtn")

nameContainer.innerHTML = "Welcome " + JSON.parse(localStorage.getItem("user"))[0].name

logoutBtn.addEventListener("click", logout)

function logout() {
   localStorage.removeItem("user")
   window.location.href = "index.html"
}
