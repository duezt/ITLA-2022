/*Escribe un programa que pida un número y diga si es divisible por 2.*/


const prompt = require('prompt');

prompt.start();


prompt.get(['valor1'], function (err, result) {
    
    if (parseInt(result.valor1) % 2 === 0 ){

        console.log(result.valor1 = " es divisible por 2");

    } else {
        console.log(result.valor1 = " no es divisible por 2");
    }
   
   
  });