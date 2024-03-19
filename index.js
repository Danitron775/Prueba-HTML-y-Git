const form = document.getElementById("singUp");

form.addEventListener("submit", function(event)){
    Event.preventDefault(); //quita las caracteristicas definidas de consultar a una base de datos

    const name = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("re-password").value;

    const validar = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&/\(\)'\?¡¿\{\}\[\]]).{8,}/;
    const validarName = /^\w.{4,10}$/;

    if (validar.test(password) && password == rePassword && validarName.test(name)){
        alert("Nombre: " + name + \n + "Password: " + password);
    } else {
        alert("valores no permitidos")
    }


}