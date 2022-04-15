/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/


const prompt = require('prompt');

prompt.start();


prompt.get(['valor1', 'valor2'], function (err, result) {
    
    if (parseInt(result.valor1) > parseInt(result.valor2) ){
        console.log("valor1 " + result.valor1 + " es mayor que el valor2" + result.valor2);
    } else {
        console.log("valor2 " + result.valor2 + " es mayor que el valor1 " + result.valor1);
    }
   
   
  });