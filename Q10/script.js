function gerarIntervalo() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var resultado = "";

	if (num1 < num2) {
		for (var i = num1; i <= num2; i++) {
			resultado += i + " ";
		}
	} else if (num2 < num1) {
		for (var i = num2; i <= num1; i++) {
			resultado += i + " ";
		}
	} else {
		resultado = "Os números são iguais.";
	}

	document.getElementById("resultado").innerHTML = resultado;
}
