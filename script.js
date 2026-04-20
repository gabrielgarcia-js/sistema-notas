function calcularMedia() {
  let nome = document.getElementById("nome").value;

  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let n3 = parseFloat(document.getElementById("n3").value);
  let n4 = parseFloat(document.getElementById("n4").value);

  let media = (n1 + n2 + n3 + n4) / 4;

  let resultado = document.getElementById("resultado");

  if (media >= 7) {
    resultado.innerText = `${nome}, você foi aprovado com média ${media.toFixed(2)}`;
  } else {
    resultado.innerText = `${nome}, você foi reprovado com média ${media.toFixed(2)}`;
  }
}