/**Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */


const prompt = require('prompt');

prompt.start();


prompt.get(['valor1', 'valor2','valor3'], function (err, result) {
    
    if (parseInt(result.valor1) > parseInt(result.valor2) && parseInt(result.valor1) > parseInt(result.valor3) ){

        console.log("valor1: " + result.valor1 + " es mayor que el valor2 que es: " + result.valor2 + "Y valor3 que es: " + result.valor3);

    } else if(parseInt(result.valor2) > parseInt(result.valor1) && parseInt(result.valor2) > parseInt(result.valor3)){

        console.log("valor2: " + result.valor2 + " es mayor que el valor1 que es: " + result.valor1 + "Y valor3 que es: " + result.valor3);

    }else {
        console.log("valor3: " + result.valor3 + " es mayor que el valor2 que es: " + result.valor2+ "Y valor1 que es: " + result.valor1);
    }
   
   
  });