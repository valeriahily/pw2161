//Variable global
var operador = "";

function igual()
{
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
}

function numeros(num)
{
	if(operador==0) //Escribir en el operando1
	{
		var valor = document.calculadora.operando1.value;
		if(valor == "0") //Vaciamos la caja
		{
			document.calculadora.operando1.value = "";

		}
		//Concatenar lso valodes de num con los de operando1
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
    }
		else //Escribir en el operadno2
		{
			var valor = document.calculadora.operando2.value;
			if(valor == "0") //Vaciamos la caja
			{
				document.calculadora.operando2.value = "";
			}
				//Concatenar lso valodes de num con los de operando1
				document.calculadora.operando2.value = document.calculadora.operando2.value + num;
	    }
}

function operadores(ope)
{
	operador = ope;
}