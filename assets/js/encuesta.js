var form = document.getElementById('form');
var cancel = document.getElementById("cancel");
var reset = document.getElementById("reset");
var send = document.getElementById("send");

reset.addEventListener("click", e => {
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

const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const fnacimiento = document.querySelector("[name=fnacimiento]");
const sexo = document.querySelector("[name=sexo]");
const gvaloracion = document.querySelector("[name=gvaloracion]");
const email = document.querySelector("[name=email]");

const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateEmptyField = (message, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.trim().length === 0) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
  }
}

const validateEmailFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
    setErrors("Ingrese un mail valido", field);
  } else {
    setErrors("", field, false);
  }
}

const validateStringFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[a-zA-Z]+$/);
  if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
    setErrors("Ingrese un formato valido", field);
  } else {
    setErrors("", field, false);
  }
}

const validateDateFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[a-zA-Z]+$/);
  if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
    setErrors("Ingrese un formato valido", field);
  } else {
    setErrors("", field, false);
  }
}

nombre.addEventListener("blur", (e) => validateEmptyField("El Nombre es requerido.", e));
apellido.addEventListener("blur", (e) => validateEmptyField("El Apellido es requerido.", e));
fnacimiento.addEventListener("blur", (e) => validateEmptyField("La Fecha de Nacimiento es requerido.", e));

nombre.addEventListener("input", validateStringFormat);
apellido.addEventListener("input", validateStringFormat);

sexo.addEventListener("blur", (e) => validateEmptyField("El Sexo es requerido.", e));
email.addEventListener("blur", (e) => validateEmptyField("El Email es requerido.", e));
email.addEventListener("input", validateEmailFormat);
