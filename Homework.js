/*Array at 

En JavaScript, puede usar el corchete [] para acceder a un elemento de un matriz. 
Por ejemplo, el array[0] devuelve el primer elemento de la matriz array, 
el array[1] devuelve el segundo elemento, y así sucesivamente.*/

const scores = [5, 6, 7, 8];

console.log(scores.at(1));
console.log(scores.at(-1)) //El método con un índice negativo devolverá un elemento desde el final de la matriz.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CONCAT

/*los concat() El método se usa para fusionar dos o más matrices.
Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.*/

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CONSTRUCTOR

/* Una matriz de JavaScript se inicializa con los elementos dados, excepto en el caso
en que se pasa un solo argumento a la Array constructor y ese argumento es un número 
( ver el arrayLength parámetro debajo ). Tenga en cuenta que este caso especial solo se 
aplica a las matrices de JavaScript creadas con el Array constructor, 
no literales de matriz creados con la sintaxis de soporte.*/


const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[1]); // "Apple"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//copywithin

/* Hace shallow copies parte de una matriz a otra ubicación en la misma matriz y la devuelve sin modificar su longitud.*/


var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// place at 0th position, the element between 1st and 2nd position.  
var result=arr.copyWithin(0,1,2);  
console.log(result) 

var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// place from 0th position, the elements between 1st and 3rd position.  
var result2=arr.copyWithin(0,1,3);  
console.log(result2)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ENTRIES

/* los entries() método devuelve un nuevo Matriz Iterator objeto que 
contiene los pares clave / valor para cada índice en el matriz.*/

const array11 = ['a', 'b', 'c'];

const iterator1 = array11.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

console.log(iterator1.next().value);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EVERY

/*Determina si todos los elementos en el array satisfacen una condición.*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array21 = [1, 30, 39, 29, 10, 13];

console.log(array21.every(isBelowThreshold));
// Expected output: true

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FILL

/*El método fill() cambia todos los elementos en un arreglo por 
un valor estático, desde el índice start (por defecto 0) 
hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.*/

const array16 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array16.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array16.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array16.fill(6));
// Expected output: Array [6, 6, 6, 6]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FILTER

/*los filter() el método crea un copia superficial de una parte de una matriz dada, filtrada solo a los elementos 
de la matriz dada que pasan la prueba implementada por la función proporcionada. */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const resultP = words.filter(word => word.length > 6);

console.log(resultP);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FIND

/*los find() El método devuelve el primer elemento en la matriz proporcionada que satisface la función de prueba proporcionada. 
Si ningún valor satisface la función de prueba, undefined es devuelto. */

const array19 = [5, 12, 8, 130, 44];

const found = array19.find(element => element > 10);

console.log(found);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FINDINDEX

/*los findIndex() El método devuelve el índice del primer elemento en 
una matriz que satisface la función de prueba proporcionada. 
Si ningún elemento satisface la función de prueba, se devuelve -1. */

const array20 = [5, 12, 8, 130, 44];

//const isLargeNumber = (element) => element > 13;

//console.log(array20.findIndex(isLargeNumber));
// Expected output: 3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FINDLAST

/*los findLast() El método itera la matriz en orden inverso y devuelve el 
valor del primer elemento que satisface la función de prueba proporcionada. 
Si ningún elemento satisface la función de prueba, undefined es devuelto. */

const array199 = [5, 12, 50, 130, 44];

//const foundP = array199.findLast((element) => element > 45);

//console.log(foundP);
// Expected output: 130

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//findLastIndex

/* */
const things = [{v: 1}, {v: 2}, {v: 3}, {v: 4}, {v: 5}];

//things.findLast(elem => elem.v > 3); // {v: 5}
//things.findLastIndex(elem => elem.v > 3); // 4

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FLAT

/*los flat() El método crea una nueva matriz 
con todos los subarrayos elementos concatenados recursivamente hasta la profundidad especificada. */

const arrA = [1, 2, [3, 4]];
arrA.flat();
// [1, 2, 3, 4]

const arrE = [1, 2, [3, 4, [5, 6]]];
arrE.flat();
// [1, 2, 3, 4, [5, 6]]

const arrU = [1, 2, [3, 4, [5, 6]]];
arrU.flat(2);
// [1, 2, 3, 4, 5, 6]

const arrOZ = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arrOZ.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FLATMAP

/*los flatMap() El método devuelve una nueva matriz formada aplicando una función de devolución de llamada dada
 a cada elemento de la matriz, y luego aplanando el resultado en un nivel. Es idéntico a un map() seguido de un 
 flat() de profundidad 1 (arr.map(...args).flat()), pero un poco más eficiente que llamar a esos dos métodos por 
 separado. */

 const arr177 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr177.flatMap(num => num);

console.log(flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]



const arr178 = [1, 2, 3, 4];

arr178.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr178.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr178.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//forEACH

/*los forEach() método ejecuta una función proporcionada una vez para cada elemento de matriz. */

const array133 = ['a', 'b', 'c'];

array133.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//INCLUDES

/* los includes() método determina si una matriz incluye un cierto valor entre sus entradas, 
devolviendo true o false según corresponda.*/

const array01 = [1, 2, 3];

console.log(array01.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//INDEXOF

/* los indexOf() método devuelve el primer índice en el que un 
El elemento dado se puede encontrar en la matriz, o -1 si no está presente. */

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//JOIN

/*los join() método crea y devuelve una nueva cadena concatenando todos 
los elementos en una matriz ( o un objeto tipo matriz), separado por comas o una cadena separadora especificada. 
Si la matriz tiene solo un elemento, luego ese elemento se devolverá sin usar el separador. */

const elementsS = ['Fire', 'Air', 'Water'];

console.log(elementsS.join());
// Expected output: "Fire,Air,Water"

console.log(elementsS.join(''));
// Expected output: "FireAirWater"

console.log(elementsS.join('-'));
// Expected output: "Fire-Air-Water"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KEYS

/*los keys() método devuelve un nuevo Matriz Iterator objeto que contiene las claves para cada índice en la matriz. */

const array33 = ['a', 'b', 'c'];
const iterator = array33.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//lastIndexOf

/*los lastIndexOf() el método devuelve el último índice en el que se puede encontrar un elemento dado en la matriz,
 o -1 si no está presente. La matriz es buscado hacia atrás, comenzando en fromIndex. */

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MAP

/*los map() método crea una nueva matriz poblado con los resultados de llamar a una función provista en cada 
elemento en la matriz de llamadas. */

const array99 = [1, 4, 9, 16];

// Pass a function to map
const map11 = array99.map(x => x * 2);

console.log(map11);
// Expected output: Array [2, 8, 18, 32]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//POP

/*los pop() el método elimina el último elemento de una matriz y devuelve ese elemento. 
Este método cambia la longitud de la matriz. */

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PUSH

/*los push() el método agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz. */

const animalsS = ['pigs', 'goats', 'sheep'];

const count = animalsS.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animalsS.push('chickens', 'cats', 'dogs');
console.log(animalsS);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//REDUCE

/*los reduce() el método ejecuta una función de devolución de llamada "reductor" suministrada por el usuario 
en cada elemento de la matriz, en orden, pasando el valor de retorno del cálculo en el elemento anterior. 
El resultado final de ejecutar el reductor en todos los elementos de la matriz es un solo valor.
La primera vez que se ejecuta la devolución de llamada no hay un "valor de retorno del cálculo anterior". 
Si se suministra, se puede usar un valor inicial en su lugar. De lo contrario, el elemento de matriz en el 
índice 0 se usa como valor inicial y la iteración comienza desde el siguiente elemento ( índice 1 en lugar del índice 0 ). */

const array77 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array77.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//REDUCERIGHT

/*los reduceRight() el método aplica una función contra un acumulador
 y cada valor de la matriz ( de derecha a izquierda ) para reducirlo a una sola valor. */

const array000 = [[0, 1], [2, 3], [4, 5]];

const resultA = array000.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(resultA);
// Expected output: Array [4, 5, 2, 3, 0, 1]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//REVERSE

/*los reverse() el método invierte una matriz en su lugar y devuelve la referencia a la misma matriz, 
el primer elemento de matriz ahora se convierte en el último y el último elemento de matriz se convierte en el primero. 
En otras palabras, el orden de los elementos en la matriz se girará hacia la dirección opuesta a la indicada
 anteriormente. */

 const array90 = ['one', 'two', 'three'];
console.log('array1:', array90);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array90.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array90);
// Expected output: "array1:" Array ["three", "two", "one"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SHIFT

/*los shift() el método elimina el primero elemento de una matriz y devuelve ese elemento eliminado.
 Este método cambia la longitud de la matriz.   */

 const array88 = [1, 2, 3];

const firstElement = array88.shift();

console.log(array88);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SLICE

/*los slice() método devuelve un copia superficial de una porción de una matriz en un nuevo objeto de matriz seleccionado
 de start a end (end no incluido ) donde start y end representar El índice de elementos en esa matriz. 
 La matriz original no se modificará. */

const animalsA = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animalsA.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animalsA.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animalsA.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animalsA.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animalsA.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animalsA.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SOME

/*los some() pruebas de método si al menos un elemento en la matriz pasa la prueba implementada por el proporcionado 
función. Devuelve verdadero si, en la matriz, encuentra un elemento para el cual la función proporcionada devuelve 
verdadero; de lo contrario, devuelve falso. No modifica la matriz. */

const arrayS = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(arrayS.some(even));
// Expected output: true

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORT

/*los sort() método clasifica los elementos de una matriz en su lugar y devuelve la referencia a la misma matriz, 
ahora ordenada. El orden de clasificación predeterminado es ascendente, construido al convertir los elementos en cadenas,
 luego comparar sus secuencias de valores de unidades de código UTF-16.

La complejidad de tiempo y espacio del tipo no se puede garantizar ya que depende de implementación. */

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array78 = [1, 30, 4, 21, 100000];
array78.sort();
console.log(array78);
// Expected output: Array [1, 100000, 21, 30, 4]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SPLICE

/*los splice() método cambia el contenido de una matriz por eliminar o reemplazar elementos existentes y / o 
agregar nuevos elementos en su lugar. Para acceder a una parte de una matriz sin modificarla, consulte slice(). */

const monthsS = ['Jan', 'March', 'April', 'June'];
monthsS.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(monthsS);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

monthsS.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(monthsS);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//toLocaleString

/*los toLocaleString() método devuelve una cadena que representa Los elementos de la matriz. 
Los elementos se convierten en cadenas usando sus toLocaleString métodos y estas cadenas 
están separadas por un entorno local específico Cadena ( como una coma "," ). */

const array65 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array65.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//toString

/*los toString() método devuelve una cadena que representa matriz especificada y sus elementos. */

const array25 = [1, 2, 'a', '1a'];

console.log(array25.toString());
// Expected output: "1,2,a,1a"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//unshitf

/*los unshift() el método agrega uno o más elementos al inicio de una matriz y devuelve la nueva longitud de la matriz. */

const array76 = [1, 2, 3];

console.log(array76.unshift(4, 5));
// Expected output: 5

console.log(array76);
// Expected output: Array [4, 5, 1, 2, 3]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//values

/*los values() método devuelve un nuevo matriz iterador objeto que itera el valor de cada índice en la matriz. */

const array46 = ['a', 'b', 'c'];
const iterator11 = array46.values();

for (const value of iterator11) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"