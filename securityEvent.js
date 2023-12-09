let codigoVerificador = "";
// Función para abrir el modal
function abrirModal() {
	var modal = document.getElementById("miModal");
	modal.style.display = "block";
}

function cerrarModal() {
	var modal = document.getElementById("miModal");
	modal.style.display = "none";
}
// Función para verificar el código (puedes mantener la función verificator aquí)



// Función para abrir el modal de generación de código
function abrirModalGenerarCodigo() {
	var modal = document.getElementById("modalGenerarCodigo");
	modal.style.display = "block";
}

// Función para cerrar el modal de generación de código
function cerrarModalGenerarCodigo() {
	var modal = document.getElementById("modalGenerarCodigo");
	modal.style.display = "none";
}

// Función para generar un código
function generarCodigo() {
	// Lógica para generar el código (puedes personalizar según tus necesidades)
	var nuevoCodigo = Math.random().toString(36).substring(2, 8).toUpperCase();

	// Muestra el código generado en el modal
	var codigoGeneradoElement = document.getElementById("codigoGenerado");
	codigoGeneradoElement.innerText = "Código generado: " + nuevoCodigo;

	// Puedes utilizar el código generado según tus necesidades
	console.log('Código generado:', nuevoCodigo);
	
	 codigoVerificador = nuevoCodigo;
	return codigoVerificador;
}



function verificator() {
	var codigoIngresado = document.getElementById("codigoInput").value;

	if (codigoIngresado === codigoVerificador) {
			window.open("https://google.com", "_blank");
	} else {
			alert("Código incorrecto. No se abrirá la nueva pestaña." + "el codigo es: " + codigoVerificador);
	}
}