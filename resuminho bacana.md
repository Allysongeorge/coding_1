// cursinho javascript:
/*Módulo 1: Fundamentos do JavaScript (Básico)
Aula 1: O que é JavaScript?
JavaScript é uma linguagem de programação usada principalmente para criar interatividade em páginas web.
Originalmente desenvolvida para navegadores, agora é amplamente usada em diferentes ambientes, como servidores (Node.js), aplicativos móveis e até IoT.
Vantagens do JavaScript:

Executado diretamente no navegador.
Ampla comunidade e recursos.
Versátil: do frontend ao backend.
Prática: Abra seu navegador e use o console para testar códigos JavaScript.

Atalho para abrir o console: F12 (Windows) ou Cmd + Option + I (Mac), vá na aba "Console".
No console, digite:
*/
// Aula 2: Primeiros passos na sintaxe
             Comentários:

Linha única: // Este é um comentário
Multilinhas:

/* Este é um 
comentário de várias linhas */
Declaração de variáveis:

var, let e const:

let nome = "João";  // Variável que pode mudar
const idade = 25;   // Variável constante
Imprimindo no console:

Use console.log():

console.log("Minha primeira variável:", nome);
Exercício 1:

Declare uma variável chamada curso e atribua a ela o valor "JavaScript Básico".
Declare uma variável chamada duracao e atribua a ela o valor 30.
Use console.log para exibir a mensagem: Estou aprendendo JavaScript Básico em 30 dias.
Aula 3: Tipos de Dados
Os principais tipos de dados em JavaScript são:

String: Sequência de caracteres (texto):


let nome = "Ana";
console.log(typeof nome); // string
Number: Números (inteiros e decimais):


let idade = 28;
let altura = 1.75;
Boolean: Verdadeiro (true) ou Falso (false):


let maiorDeIdade = true;
Undefined: Variável sem valor inicial:


let indefinido;
Null: Representa "vazio":


let vazio = null;
Exercício 2:

Declare variáveis para representar: seu nome, idade, altura e se está matriculado neste curso.
Exiba no console o tipo de cada uma usando typeof.

Exercicio
let nome = "Allyson";
let idade = 19;
let altura = 1.81
let matriculado = true;

// Exibindo as variáveis e seus tipos no console
console.log("Meu nome é:", nome, "e meu tipo é:", typeof nome);
console.log("Minha idade é:", idade, "e meu tipo é:", typeof idade);
console.log("Minha altura é:", altura, "e meu tipo é:", typeof altura);
console.log("Estou matriculado neste curso:", matriculado, "e meu tipo é:", typeof matriculado);


Ótimo trabalho! Vamos revisar os conceitos rapidamente antes de seguir:

Comentários: São usados para documentar o código.
Variáveis: let, const e var são usadas para armazenar dados.
Tipos de Dados: Strings, números, booleanos, undefined e null.
Agora, vamos avançar para a próxima aula!

Aula 4: Operadores em JavaScript
Operadores são usados para realizar cálculos ou manipular valores.

1. Operadores Aritméticos
Realizam cálculos matemáticos:

Soma: +
Subtração: -
Multiplicação: *
Divisão: /
Resto (módulo): %
Exemplo:


let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
2. Operadores de Comparação
Comparam dois valores e retornam um booleano (true ou false):

Igualdade: == (não estrita) e === (estrita)
Diferença: != (não estrita) e !== (estrita)
Maior que: >
Menor que: <
Maior ou igual: >=
Menor ou igual: <=
Exemplo:


console.log(5 == "5");  // true (compara valor)
console.log(5 === "5"); // false (compara valor e tipo)
3. Operadores Lógicos
Combinam expressões:

E (AND): &&
Ou (OR): ||
Não (NOT): !
Exemplo:


let idade = 20;
console.log(idade > 18 && idade < 30); // true
console.log(idade > 18 || idade > 30); // true
console.log(!(idade > 18));            // false
Exercício 3:
Declare duas variáveis: x = 8 e y = 3.
Calcule e exiba:
Soma, subtração, multiplicação e divisão de x e y.
Verifique se x é maior que y e se x é igual a 8 usando ===.
Desafio:
Crie um código que verifica se uma pessoa pode votar:

A idade mínima para votar é 16 anos.
Exiba no console: "Pode votar" ou "Não pode votar".

let idade = 15
if (idade >= 16) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}

