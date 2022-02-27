let greet = () => console.log(`Hello from the module`);
//Una function expression
module.exports = greet;
//Al declararlo como module.export, podremos hacer uso de este en el app.js
//Esto sirve para exponer solo el contenido que nosotros queremos a otros módulosm,
//con el fin de que se le de que alguien más acceda a esa funcionalidad.