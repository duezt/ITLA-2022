/**4. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números. */

const prompt = require('prompt');

prompt.start();


prompt.get(['valor1', 'valor2'], function (err, result) {
    let totalResult = parseInt(result.valor1) + parseInt(result.valor2);
    console.log('resultado de la su sumas es: ' + totalResult);

  });