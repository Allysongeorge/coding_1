//Atividade 1 
var prompt = require("prompt-sync")();

const { Console } = require("console")

//Crie um programa que:
//● Declare uma variável chamada nome e atribua o seu nome a ela.
//● Declare uma variável chamada idade e atribua a sua idade a ela.
//● Imprima na tela uma mensagem como: "Olá, meu nome é [nome] e tenho [idade] anos."

/*const nome = prompt("Qual é a seu nome? ");
const idade = prompt("Qual é a sua idade? ")
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
*/

//Crie um programa que:
//● Declare uma variável para nome e para cidade
//● Armazene as informações do tipo String em variáveis e imprima uma mensagem
//personalizada, como: "[Nome] é de [cidade].

/*const cidade = "Ilha de itamaracá"
const nome = "Allyson"
console.log(`${nome} é de ${cidade}`)
*/

//Crie um programa que:
//● Declare duas variáveis numéricas: num1 e num2.
//● Realize as quatro operações básicas(+, -, *, /), e imprima os resultados.

/*const num2 = 2
const num1 = 10
const soma = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2
console.log(`A soma de 10 com 2 dá = ${soma}`)
console.log(`A subtração de 10 com 2 dá = ${sub}`)
console.log(`A multiplicação de 10 com 2 dá = ${mult}`)
console.log(`A divisão de 10 com 2 dá = ${div}`)
*/

//Cálculo de Área:
//● Declare duas variáveis numéricas: base e altura.
//● Armazene nas variáveis a base e a altura de um triângulo.
//● Calcule a área e exiba o resultado.
//● Exemplo: “A área do triângulo é _______”.


/*const base = 10
const altura =20
const area = (base * altura) / 2
console.log(`A área do triângulo é: ${area}`) 
*/

//Cálculo de Média:
//● Declare variáveis para inserir 3 notas de um aluno.
//● Crie uma nova variável chamada media, nela deve conter o cálculo da média das 3 notas.
//● Exiba o resultado da média, informado a nota final.
//● Exemplo: “O resultado da média é __________’”.


/*const var1 = 7
const var2 = 7
const var3 = 7
const media = (var1 + var2 +var3) / 3
console.log(`O resultado da média é: ${media}`)
*/

//Desconto:
//● Crie um programa que calcule o valor final de um produto com desconto.
//● As variáveis devem informar o preço original e o percentual de desconto.
//● Exiba o resultado com uma mensagem personalizada.

/*const valoro = 100
const porcentagem = 25
const valorfinal = 100 - ((porcentagem / 100) * 100 ) 
console.log(`O produto original tinha o valor de ${valoro} e o desconto foi de ${porcentagem}% assim o produto final ficou: ${valorfinal}`)
*/

//Imposto de Renda:
// ● Simule um cálculo simplificado de imposto de renda, considerando uma tabela de alíquotas.
// ● Avariável deve informar o salário bruto.
// ● Exiba oresultado com uma mensagem personalizada.

/*const salario_bruto = 5000
const imposto = (salario_bruto - 2000) * 0.10
console.log(`Para um salário bruto de R$ ${salario_bruto}, o imposto de renda a pagar é R$ ${imposto}`)
*/

// Conversor de Moedas:
 //● Crie um conversor de moedas, considerando taxas de câmbio atualizadas.
 //● As variáveis devem guardar o valor das moedas inicial e final.
 //● Exiba o resultado com uma mensagem personalizada.

/*const valor = 100
let dolar = valor / 5.48
let dolarformatado = dolar.toFixed(2)
console.log(`De R$: ${valor} convertido em dolar dá: ${dolarformatado}`)
*/

 

 //Convertendo Celsius para Fahrenheit
 //● Crie uma variável para a temperatura em Celsius e faça a conversão para
 //Fahrenheit usando a fórmula (Celsius * 9/5) + 32.
 //● Exiba o resultado com uma mensagem personalizada.

 /*const celsius = 30
 const fahrenheit = (celsius * 9/5) + 32
 console.log(`${celsius} celsius convertido em fahrenheit fica: ${fahrenheit}`)
 */


// Calculadora de IMC (Índice de Massa Corporal)
// ● Crie variáveis para peso (em kg) e altura (em metros).
// ● Calcule o IMC utilizando a fórmula: IMC = peso / (altura * altura).
// ● Exiba o resultado no console.
// ● Pesquise sobre o método toFixed (valor.toFixed(2))

/*const peso = 80
const altura = 1.80
let imc = peso / (altura * altura)
let imcformatado = imc.toFixed(2) 
console.log(`Com o peso de ${peso} kg e com a altura de ${altura} metros o imc tem o resultado de: ${imcformatado}`)
*/





 
 


