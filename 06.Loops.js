'use strict'

// **Iteración #6: Mixed For...of e includes**

// Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
// Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'},
    ]

console.log("quiero quitar a los que contengan la palabra Gato");
console.log("los busco y guardo en una variable");

let catPosition = [];

for (let toy of toys) {
    if (toy.name.includes('gato')) { 
        catPosition.push(toys.indexOf(toy));
    } 
}

for (let i = catPosition.length - 1; i>=0; i--){
    const position = catPosition[i];
    toys.splice(position, 1);
}

console.log(toys);