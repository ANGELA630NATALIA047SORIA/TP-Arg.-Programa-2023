
function verificar_datos(){

    var nombre = document.getElementById("name");
    if (nombre.value == "") {
        alert ("Atención! El nombre esta vacio");
        return;
    }

    var mail = document.getElementById("email");
    if (mail.value == "") {
        alert ("Atención! El mail esta vacio");
        return;
    }

    var telefono = document.getElementById("phone");
    if (telefono.value == "") {
        alert ("Atención! El telefono esta vacio");
        return;
    }

    var asunto = document.getElementById("subject");
    if (asunto.value == "") {
        alert ("Atención! El asunto esta vacio");
        return;
    }

    var mensaje = document.getElementById("message");
    if (mensaje.value == "") {
        alert ("Atención! El mensaje esta v.acio");
        return;
    }


    //Si pasa todos los controles 
    alert ("Mail enviado correctamente.");

}