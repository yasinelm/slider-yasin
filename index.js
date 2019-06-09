const imagenes = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg',];
var slider = document.getElementById("slider");
var contador = 0;
function mover(i){
	switch (i) {
		/*boton izquiero*/
		case 1:
			contador++;
			if (contador > imagenes.length -1)contador = 0;
			slider.src= "imagenes/" + imagenes[contador];
			break;
		/*boton derecho*/
		case -1:

			contador--;
			if (contador < 0) contador = imagenes.length -1;
			slider.src = "imagenes/" + imagenes[contador];
			break;

	}
}