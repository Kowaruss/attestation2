function login() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if (login === "admin" && password === "admin") {
    window.location.href = "../next/";
  } else {
    alert("Неверный логин или пароль");
  }
}

function register() {
  alert("Регистрация пока не реализована");
}
