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
			alert("El clave no deber ser vacío");
			$("#txtClave").focus();
		}
		//2.-Verificar usuario y contraseña
		if(usuario == "pw" && clave == "1234")
		{
			//alert("Bienvenido "+usuario);
			//Dar entrada al usuario
			$("#datosUsuario").hide(); //Escondemos
			$("nav").show("slow"); //Mostramos
		}
		else
		{
			alert("Usuario y/o contraseña incorrecta(s)");
		}
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);