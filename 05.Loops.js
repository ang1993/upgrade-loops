'use strict'

// **Iteración #5: Probando For**

// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
// Imprime en un ***console log*** el array. Puedes usar este array:

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

let placePosition = [];

for (let i = 0; i < placesToTravel.length; i++) {
    const place = placesToTravel[i];
    if (place.id == 11 || place.id == 40){
        placePosition.push(placesToTravel.indexOf(place));
    }
}

for (let i = placePosition.length - 1; i>= 0;  i--) {
    const position = placePosition[i];
    placesToTravel.splice(position, 1);
}

console.log(placesToTravel);


