var iniciaApp = function()
{
	var validarEntrada = function()
	{
		//Invalida los eventos que no corresponden a esta funcion
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		// *Validaciones*
		//1.-Que no sean vacios
		if(usuario == "")
		{
			alert("El usuario no deber ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no deber ser vacío");
			$("#txtClave").focus();
		}
		// ** 2.-Verificar usuario y contraseña SIN PHP **
		// if(usuario == "pw" && clave == "1234")
		// {
		// 	//alert("Bienvenido "+usuario);
		// 	//Dar entrada al usuario
		// 	$("#datosUsuario").hide(); //Escondemos
		// 	$("nav").show("slow"); //Mostramos
		// }
		// else
		// {
		// 	alert("Usuario y/o contraseña incorrecta(s)");
		// }
		var parametros = "accion=validarEntrada"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random(); //Para no utilizar el cache
		$.ajax({
			beforeSend: function(){
				console.log("Validar al usuario");
			},
			cache: false, 
			type: "POST", //Enviar datos
			dataType: "json", //Como recibir los datos
			url:"php/funciones.php", //Donde los vamos a mandar
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}
				else
				{
					alert("Usuario y/o Contraseña incorrecto(s)");
				}
			},
			error: function(xhr,ajax0ptionx,thrownError){
				console.log("Algo salió mal");
			}
		});

		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);