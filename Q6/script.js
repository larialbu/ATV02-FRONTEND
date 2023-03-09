
let numeros = "";

function mostrarNumeros() {
  const numerosDiv = document.getElementById("numeros");

  if (numerosDiv.style.display === "none") {
    numerosDiv.style.display = "block";
    numeros = "";
    for (let i = 1; i <= 20; i++) {
      numeros += i + "<br>";
    }
  } else {
    numerosDiv.style.display = "none";
    numeros = "";
    for (let i = 1; i <= 20; i++) {
      numeros += i + " ";
    }
  }

  numerosDiv.innerHTML = numeros;
}
