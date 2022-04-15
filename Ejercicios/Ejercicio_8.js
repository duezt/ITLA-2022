const prompt = require('prompt');

prompt.start();


prompt.get(['valor1'], function (err, result) {
    
    if (parseInt(result.valor1) % 2 !== 0 ){

        console.log(result.valor1 = " es un numero primo");

    } else {
        console.log(result.valor1 = " no es un numero primo");
    }
   
   
  });