function calcularAnos() {
    const populacaoAInput = document.getElementById("populacao-a");
    const taxaAInput = document.getElementById("taxa-a");
    const populacaoBInput = document.getElementById("populacao-b");
    const taxaBInput = document.getElementById("taxa-b");
    const errosDiv = document.getElementById("erros");

    const populacaoA = parseInt(populacaoAInput.value);
    const taxaA = parseFloat(taxaAInput.value);
    const populacaoB = parseInt(populacaoBInput.value);
    const taxaB = parseFloat(taxaBInput.value);

    // Validação das entradas
    let erros = [];

    if (isNaN(populacaoA) || populacaoA <= 0) {
      erros.push("População inicial do país A inválida.");
      populacaoAInput.classList.add("erro");
    } else {
      populacaoAInput.classList.remove("erro");
    }

    if (isNaN(taxaA) || taxaA <= 0) {
      erros.push("Taxa de crescimento do país A inválida.");
      taxaAInput.classList.add("erro");
    } else {
      taxaAInput.classList.remove("erro");
    }

    if (isNaN(populacaoB) || populacaoB <= 0) {
      erros.push("População inicial do país B inválida.");
      populacaoBInput.classList.add("erro");
    } else {
        populacaoBInput.classList.remove("erro");
    }

    if (isNaN(taxaB) || taxaB <= 0) {
      erros.push("Taxa de crescimento do país B inválida.");
      taxaBInput.classList.add("erro");
    } else {
      taxaBInput.classList.remove("erro");
    }

    if (erros.length > 0) {
      errosDiv.innerHTML = "";
      erros.forEach(erro => {
        errosDiv.innerHTML += "<p class='erro'>" + erro + "</p>";
      });
      return;
    } else {
      errosDiv.innerHTML = "";
    }

    // Cálculo do número de anos
    let anos = 0;

    while (populacaoA < populacaoB) {
      populacaoA += Math.round(populacaoA * taxaA / 100);
      populacaoB += Math.round(populacaoB * taxaB / 100);
      anos++;
    }

    // Exibição do resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>Em " + anos + " anos, a população do país A ultrapassará ou igualará a população do país B.</p>";
  }