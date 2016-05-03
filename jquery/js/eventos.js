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

	var clicBoton2 = function ()
	{
		$.ajax({
	      beforeSend:function(){
	      	console.log("Espere...");
	      },
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data){
		  console.log(data);
		  alert(data.results[0].name.first+
		  	    " "+data.results[0].name.last);
		  },
		  error:function(xhr,error,throws){
		  	console.log("Ocurrio un error");
		  }
		});   
	}

	var teclaUnInput = function(tecla)
	{
		if(tecla.which == 13)
		{
			$("#otroInput").focus(); //Que se posicione en oroInput
		}
	}
	//Preparar los eventos de todos mis objetos
	$("#miBoton").off("click",clicBoton); //Estamos programando el evento clic del boton activado 
	$("#miBoton").on("click",clicBoton2); //Desactivado
	$("#unInput").on("keypress",teclaUnInput); //Keypresss nos lleva a la tecla seleccionada
}
//Main
$(document).on("ready",inicio); 