function calcular() {
    // Obter os valores dos números
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let num4 = Number(document.getElementById("num4").value);
    let num5 = Number(document.getElementById("num5").value);
  
    // Calcular a soma dos números
    let soma = num1 + num2 + num3 + num4 + num5;
  
    // Calcular a média dos números
    let media = soma / 5;
  
    // Exibir o resultado na página
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Soma: " + soma + " | Média: " + media;
  }
  