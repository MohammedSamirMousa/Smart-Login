var nameContainer = document.querySelector("h1")
var logoutBtn = document.getElementById("logoutBtn")

nameContainer.innerHTML = "Welcome " + JSON.parse(localStorage.getItem("user")).name

logoutBtn.addEventListener("click", logout)

function logout() {
   localStorage.clear()
   window.location.href = "index.html"
}