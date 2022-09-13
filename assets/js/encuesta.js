var form = document.getElementById('form');
var cancel = document.getElementById("cancel");
var reset = document.getElementById("reset");
var send = document.getElementById("send");

reset.addEventListener("click", e =>{
    e.preventDefault();
    form.reset();
});

send.addEventListener("click", e => {
    e.preventDefault();
    var sexoID = document.getElementById("sexo"); 
    var valoracionID = document.getElementById("gvaloracion"); 

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fnacimiento = document.getElementById('fnacimiento').value;
    var sexo = sexoID.options[sexoID.selectedIndex].text;
    var gvaloracion = valoracionID.options[valoracionID.selectedIndex].text;
    var email = document.getElementById('email').value;
    var comentario = document.getElementById('comentario').value;

    alert("Nombre : " + nombre + 
    "\n Apellido : " + apellido +
    "\n F. Nacimiento : " + fnacimiento +
    "\n Sexo : " + sexo +
    "\n Valoración : " + gvaloracion +
    "\n Email : " + email +
    "\n Comentario : " + comentario);
});