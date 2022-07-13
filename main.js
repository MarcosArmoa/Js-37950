
let i = 1;
// Se calculan los casos de las cuotas a pagar segun el total de cuotas y el interes 
do{
// Se ingresa el total a pagar
	let precioTotal = parseInt(prompt("Ingresa el monto total a pagar, para terminar escribe terminar"));
	let cuotas = parseInt(prompt("Ingresa la cantidad de cuotas"));
	let interes = parseInt(prompt("Ingresa el interes de las cuotas"));
	subCuotas = precioTotal/cuotas;
	interesCuotas = ((precioTotal*interes)/100)/cuotas;
	Total = subCuotas + interesCuotas;
	if(precioTotal>0){
	alert(Total)	
	}else if (precioTotal="terminar"){
		break;
	}
else {alert("el valor ingresado no es correcto")}
} while (i = 1)
