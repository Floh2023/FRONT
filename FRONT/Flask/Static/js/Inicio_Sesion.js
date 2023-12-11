function login() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Verificar el usuario y la contraseña prefijados
    if (usernameInput === "usuario" && passwordInput === "contraseña") {
        // Redirigir a la página después de iniciar sesión
        window.location.href = "Flask/templates/ingresar_producto.html";
    } else {
        document.getElementById("result").innerHTML = "Usuario o contraseña incorrectos";
    }
}