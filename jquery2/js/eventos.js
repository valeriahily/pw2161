var iniciaApp = function()
{
	var validarEntrada = function()
	{
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//Validaciones
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
		//2.-
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);