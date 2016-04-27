//jquery(etiquetas,clases,id)
//$ <- Es un sobrenombre
//$ == jquery

var inicio = function()
{
	var clicBoton = function()
	{
		console.log("Clic del botón");
		$(".anuncioWeb").html("Clic del Botón");
		$(".anuncioWeb").append("Clic del Botón");
	}
	//Preparar los eventos de todos mis objetos
	$("#miBoton").on("click",clicBoton); //Estamos programando el evento clic del boton
}
//Main
$(document).on("ready",inicio); 