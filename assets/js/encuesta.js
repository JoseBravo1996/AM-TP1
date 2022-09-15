var form = document.getElementById('form');
var cancel = document.getElementById("cancelButtom");
var reset = document.getElementById("resetButtom");
var send = document.getElementById("send");

reset.addEventListener("click", e => {
    e.preventDefault();
    form.reset();
});

cancel.addEventListener("click", e => {
  e.preventDefault();
  userConfirm = confirm("Deseas volver al menu anterior?")
  console.log(userConfirm);
  if(userConfirm)  history.back();
})

const emptyField = (field) => field.trim().length === 0;

send.addEventListener("click", e => {
    e.preventDefault();
    sexoID = document.getElementById("sexo");
    valoracionID = document.getElementById("gvaloracion");
    fields = {
      "nombre" : document.getElementById('nombre').value,
      "apellido" : document.getElementById('apellido').value,
      "fnacimiento" : document.getElementById('fnacimiento').value,
      "sexo" : sexoID.options[sexoID.selectedIndex].text,
      "gvaloracion" : valoracionID.options[valoracionID.selectedIndex].text,
      "email" : document.getElementById('email').value,
      "comentario" : document.getElementById('comentario').value,
    };    

    try {
      Object.keys(fields).forEach(function (key){
        if(emptyField(fields[key])) {
          throw "break";
        }
      });
      alert("Nombre : " + fields.nombre + 
      "\n Apellido : " + fields.apellido +
      "\n F. Nacimiento : " + fields.fnacimiento +
      "\n Sexo : " + fields.sexo +
      "\n Valoración : " + fields.gvaloracion +
      "\n Email : " + fields.email +
      "\n Comentario : " + fields.comentario);

    } catch (e) {
      alert("Debe completar todos los campos");
    }
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
  if (emptyField(fieldValue)) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
  }
  return emptyField;
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

nombre.addEventListener("blur", (e) => validateEmptyField("El Nombre es requerido.", e));
apellido.addEventListener("blur", (e) => validateEmptyField("El Apellido es requerido.", e));
fnacimiento.addEventListener("blur", (e) => validateEmptyField("La Fecha de Nacimiento es requerido.", e));
sexo.addEventListener("blur", (e) => validateEmptyField("El Sexo es requerido.", e));
email.addEventListener("blur", (e) => validateEmptyField("El Email es requerido.", e));
nombre.addEventListener("input", validateStringFormat);
apellido.addEventListener("input", validateStringFormat);
email.addEventListener("input", validateEmailFormat);