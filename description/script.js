const usernameSpan = document.getElementById("username");
const userIcon = document.getElementById("userIcon");
const dropdown = document.getElementById("dropdown");
const logoutBtn = document.getElementById("logout");
const startBtn = document.getElementById("startBtn");

if (localStorage.getItem("isAuth") !== "true") {
  window.location.href = "../index.html";
}

const username = localStorage.getItem("username");
usernameSpan.textContent = username;

userIcon.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("username");
  window.location.href = "../index.html";
});

startBtn.addEventListener("click", () => {
  window.location.href = "../stage1/index.html";
});
