let correctas = [2,1,3,1,4];

let opcion_elegida=[];

let cantidad_correctas=0;

function respuesta(num_pregunta,seleccionada){
	opcion_elegida[num_pregunta] = seleccionada.value;

	id="p"+ num_pregunta;

}

function corregir(){
	cantidad_correctas = 0;
	for (i=0; i < correctas.length;i++) {
		if(correctas[i]==opcion_elegida[i]){
			cantidad_correctas++;
		}	
	}
	document.getElementById("resultado").innerHTML = cantidad_correctas;
	
	}