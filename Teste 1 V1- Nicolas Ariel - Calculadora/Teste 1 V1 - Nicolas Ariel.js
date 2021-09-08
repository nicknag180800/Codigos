
//Funcoes da Calculadora Simples Questao 1//

function calcular(operacao) {
   var numero1 = document.calculoS.numero1.value;
   var numero2 = document.calculoS.numero2.value;

   if (operacao == "so") {
      var resultadoTotal = parseInt(numero1) + parseInt(numero2);
   } else {
      if (operacao == "sub") {
         var resultadoTotal = numero1-numero2;
      } else {
         if (operacao == "mult") {
            var resultadoTotal = numero1*numero2;
         } else {
            var resultadoTotal = numero1/numero2;
         }
      }
   }

   document.calculoS.resultadoTotal.value = resultadoTotal;
}










//Teste Falho//
/*
function calcular(){
   if(resultadoTotal){
      var operador = document.getElementById('calculo').value;
      var valor1 = document.getElementById('Cal').value;
      var valor2 = document.getElementById('Cal2').value;
      var resultadoTotal = document.getElementById('ResulT').value = valor1 + operador.value + valor2;
   }
   else if(resultadoTotal){
      var operador = document.getElementById('calculo').value;
      var valor1 = parseInt(document.getElementById('Cal').value);
      var valor2 = parseInt(document.getElementById('Cal2').value);
      var resultadoTotal = document.getElementById('ResulT').value = valor1 - operador.value - valor2;
   }
   else if(resultadoTotal){
      var operador = document.getElementById('calculo').value;
      var valor1 = parseInt(document.getElementById('Cal').value);
      var valor2 = parseInt(document.getElementById('Cal2').value);
      var resultadoTotal = document.getElementById('ResulT').value = valor1 / operador.value / valor2;  
   }
   else if(resultadoTotal){
      var operador = document.getElementById('calculo').value;
      var valor1 = parseInt(document.getElementById('Cal').value);
      var valor2 = parseInt(document.getElementById('Cal2').value);
      var resultadoTotal = document.getElementById('ResulT').value = valor1 * operador.value * valor2;  
   }
  */ 



 //Funcoes da Calculadora Keyboard Questao 3//

 function inserir(tecla){
    //Funcao que ira inserir o mesmo botao que tem no campo//
    var opcao = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = opcao + tecla;
 }
 function limpeza(){
    //Limpar a equacao inteira//
    document.getElementById('result').innerHTML = " ";
 }
 function calculo(){
    //Eu tenho que clicar duas vezes no Ent que seria o Enter pois nao sei como fazer ele me mostrar o calculo e depois me mostrar a soma total//
   var resultado = document.getElementById('result').innerHTML;
   if(result){
      document.getElementById('result').innerHTML = eval(resultado);
      console.log('Conta Efetuada: ' +resultado);
      alert('Contas mostradas no Console');

   }else{
      document.getElementById('result').innerHTML = "Vazio"
   }
 }
/* Enfeite de Jardim
    if(operacao == "+"){
       return valor_1 + valor_2;
    }
    else if(operacao == "-"){
       return valor_1 - valor_2;
    }
    else if(operacao == "*"){
       return valor_1 * valor_2;
    }
    else if(operacao == " / "){
       return valor_1 / valor_2;
    }*/