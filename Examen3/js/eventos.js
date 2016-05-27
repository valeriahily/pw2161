var iniciaApp = function()
{
	var Bajas = function()
	{
		$("#frmBajaAlmacen").on("submit",BajaAlmacen);
	}

	var BajaAlmacen = function ()
	{
		event.preventDefault();
		var datos = "#txtidAlmacen"+$("txtidAlmacen").val();
		var parametros = "accion=bajaAlmacen&"+datos+
		                 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Baja Almacen");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true )
				{
					alert("Almacen dado de baja correctamente");
				}
				else
				{
					alert("No se pudo dar de baja el almacen");
				}
			},
			error: function(xhr,ajax,thrownError){

			}
		});
	}
	$("#frmBajaAlmacen".on("submit",Bajas);
}
$(document).on("ready",iniciaApp);