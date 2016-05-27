<?php 

function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
function bajaAlmacen()
{
	$respuesta = false;
	$id = GetSQLValueString($_POST["txtidAlmacen"],"text");
	mysql_connect("localhost","root","");
	mysql_select_db("examen");
	$baja = sprintf("delete from almacenes where idAlmacen=%d ",$id);
	//$baja = sprintf("update usuarios set tipousuario='baja' where usuario=%s",$usuario);
	mysql_query($baja);
	if(mysql_affected_rows() > 0 )
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}
	$accion = $_POST["accion"];
	switch ($accion) {
		case 'bajaAlmacen':
			bajaAlmacen();
			break;
		
		default:
			# code...
			break;
	}
 ?>
