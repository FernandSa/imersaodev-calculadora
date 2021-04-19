var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var operacao = prompt("Digite o sinal para o respectiva função EX: + - * /")

if (operacao == "/") {
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == "*") {
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == "+") {
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == "-") {
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção inválida</h2>")
}
