var turno 		  = false;
var letraCasilla  = "";
var cuentaJuego   = 0;
var cuentaJugadas = 0;

function iniciaGato()
{
	//Preguntar si el navegador es compatible con localStorage
	if(typeof(Storage) != "undefined")
	{
		if(localStorage.webCuentaJuego)
		{
			cuentaJuego = parseInt(localStorage.webCuentaJuego);
			cuentaJuego = cuentaJuego + 1;			
		}
		else
		{
			cuentaJuego = 1;
		}
		document.getElementById("tituloJuego").innerHTML = "Juego del Gato (#"+cuentaJuego +")";
 	}
 	else
 	{
 		alert("Utiliza un navegador actualizado, te falta barrio!");
 	}
}

function reiniciaGato()
{
	//Eliminar la variable de localStorage
	localStorage.removeItem("webCuentaJuego");

}
function validaJugada(letra){
	var ganador = false;
	var b1 = document.getElementById("uno").innerHTML;
	var b2 = document.getElementById("dos").innerHTML;
	var b3 = document.getElementById("tres").innerHTML;
	var b4 = document.getElementById("cuatro").innerHTML;
	var b5 = document.getElementById("cinco").innerHTML;
	var b6 = document.getElementById("seis").innerHTML;
	var b7 = document.getElementById("siete").innerHTML;
	var b8 = document.getElementById("ocho").innerHTML;
	var b9 = document.getElementById("nueve").innerHTML;
	//jugadas
	//renglones
	if(b1==b2 && b2==b3 && b1!="&nbsp;")
	ganador =true;
	if(b4==b5 && b5==b6 && b4!="&nbsp;")
	ganador =true;
	if(b7==b8 && b8==b9 && b7!="&nbsp;")
	ganador =true;
	//columnas
	if(b1==b4 && b4==b7 && b1!="&nbsp;")
	ganador =true;
	if(b2==b5 && b5==b8 && b2!="&nbsp;")
	ganador =true;
	if(b3==b6 && b6==b9 && b3!="&nbsp;")
	//diagonales
	if(b1==b5 && b5==b9 && b1!="&nbsp;")
	ganador =true;
	if(b3==b5 && b5==b7 && b3!="&nbsp;")
	ganador =true;
	//¿Alguien ganó?
	if(ganador == true)//if(ganador)
		{
			alert("El ganador es: " + letra)
			localStorage.webCuentaJuego = cuentaJuego;
		}
		else if(ganador == false && cuentaJugadas == 9 )
		{
			alert("EMPATE ")
			localStorage.webCuentaJuego = cuentaJuego;
		}
	
}
function escribe(casilla)
{
	var letra = "";
	letraCasilla = document.getElementById(casilla).innerHTML;
	if(letraCasilla !="X" && letraCasilla != "O")
	{
		if(turno == false) //if(!turno)
			letra = "X";
		else
			letra = "O";
		document.getElementById(casilla).innerHTML = letra;
		turno = !turno; //turno = true;
	}
	cuentaJugadas = cuentaJugadas + 1;
	//para saber quien ganó, validamos la jugada
	validaJugada(letra);
}
