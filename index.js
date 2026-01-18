const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const errorText = document.getElementById("error");

if (localStorage.getItem("isAuth") === "true") {
  window.location.href = "description/index.html";
}

loginBtn.addEventListener("click", () => {
  const login = loginInput.value;
  const password = passwordInput.value;

  if (login === "admin" && password === "admin") {
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("username", login);
    window.location.href = "description/index.html";
  } else {
    errorText.textContent = "Неверный логин или пароль";
  }
});

registerBtn.addEventListener("click", () => {
  alert("Данная функция пока не реализована. Используйте пароль admin и логин admin");
});
