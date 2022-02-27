let obj = {};
//Un objeto literal. Al ejecutarlo así no sucede nada

let persona = {
    nombre: `Gustavo`,
    apellido: `Higuera`,
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: `Madero #144`,
        colonia: `Centro`,
        cp: 28000,
        municipio: `Colima`
    },
    getAddress: function () {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
}
console.log(persona);
//Al ejecutarlo así, me muestra todo el objeto, incluidas las llaves o los curly braces

console.log(persona.nombre);
console.log(persona.apellido);
//Al ejecutarlo así solo me muestra el contenido de los atributos que selecciono,
//es decir, solo me muestra el nombre y el apellido respectivamente.

console.log(persona.getName());
//Al ejecutarlo de esta forma, con esta función dentro del objeto, ya me muestra
//el nombre y el apellido ordenado, y lo llamo como una función dentro del mismo objeto.

console.log(persona.domicilio);
//Al ejecutarlo de esta forma me muestra solo los datos del apartado domicilio,
//y lo que contienen.

console.log(persona.getAddress());
//Al crear una función que me permita acceder al objeto domicilio de la persona, y que a su vez
//me permita acceder a los atributos del objeto domicilio podemos ordenar con una template string
//los datos y presentarlos de una manera ordenada, al igual que lo pide el ejercicio, mediante la
//función getAddress() del objeto persona.