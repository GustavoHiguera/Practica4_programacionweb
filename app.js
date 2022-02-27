//Si se escribe sin el require, al utilizar node app no sucede nada.
let greet = require('./greet');
//Una vez con el require, al utilizar node app me muestra el mensaje que tiene
//greet.js: Hello from the module.
greet();
//Si ejecutamos el greet nos da un erro, puesto que el acceso al módulo es protegido
//y en app.js no lo reconoce como una función.
//Inclusive si declaramos greet como el require, nos dirá que no es una función, a menos
//que en el módulo así este declarado mediante un module.exports.


//Un objeto de javascript es una colección de nombres/valores pares,
//que puede contener un objeto:
//-Datos primitivos
//Funciones(Métodos)
//Otros objetos

//Un objeto literal es un nombre/valor rodeado de llaves.