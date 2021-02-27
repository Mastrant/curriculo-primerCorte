
let fecha = new Date();
let año = fecha.getFullYear();
let modo = 1;
alert("Última Actualizacion: " +  año);

function botones() {
  if (modo === 1) {
    document.getElementById('Info').style.display='none'
    alert("Ocultando Información");
      return modo = 0;
  }else if (modo === 0) {
    document.getElementById('Info').style.display='block'
    alert("Mostrando Información");
      return modo = 1;
  }
}

//auto llenado del formulario

/*const autoLlenado = llenado => {
  document.getElementById("asunt").innerHTML = "ortega@gmail.com";
}; */
