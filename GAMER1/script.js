alert("Olá Seja Bem-vindo") /* alerta mostrando no início Seja Bem-vindo */
let p1=prompt("Digite Seu NOME"); /* declarando a variável p1 como let e chamando o prompt para que
você digite o nome */
let p2=prompt("Digite um PODER que gostaria de ter"); /* declarando a variável p2 como let e
chamando o prompt para que você digite o poder */
let p3=prompt("Digite o nome de um VILÃO"); /* declarando a variável p3 como let e chamando o
prompt para que você digite o vilão */
let p4=prompt("Digite um LUGAR que gostaria de estar"); /* declarando a variável p4 como let e
chamando o prompt para que você digite o lugar */
let msg= document.getElementById('msg') /* declarando a variável msg e chamando o id criado dentro
do <p> no html */
/* para chamar o id msg e mostrar na tela precisamos criar msg em seguida o innerHTML (mostre no
html)
`` a crase é uma estrutura na nova versão do javascript chamada TEMPLAIT STRINGS
$ representa a string
{} onde é passado a variável que deseja manipular como concatenar, como no exemplo abaixo
*/
msg.innerHTML =`<p>Olá ${p1} o seu poder é a/o ${p2} você vai enfrentar o/a ${p3} no/em ${p4}`