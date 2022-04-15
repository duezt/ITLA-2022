/**Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”. */

const prompt = require('prompt');

prompt.start();

prompt.get(['username'], function (err, result) {

    console.log(' Hola usuario: ' + result.username);
  });