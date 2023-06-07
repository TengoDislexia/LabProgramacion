/*    PUNTO 1
const temperaturasCelsius = [25, 30, 15, 10, 5];

let temperaturasFarenheit = temperaturasCelsius.map((item) =>{

    return (item * 1.8) + 32;
})
console.log(temperaturasFarenheit)
*/

/*          PUNTO2
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
  ];

let nombres = personas.filter((item)=> {
    return item.nombre;
})

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].nombre);
}
*/

/*          PUNTO 3
const nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Carlos'];

const letrain = "M"

const personas = nombres.filter((item) =>item.charAt(0) === letrain)
console.log(personas)
*/

/*          Punto 4
const numeros = [1, 2, 3, 4, 5];

function funcion(numeros){

 return numeros > 2

}
const numerosf = numeros.filter(funcion)
console.log(numerosf)
*/

/*              PUNTO5
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Ana', edad: 35 },
  ];
function edadesa(personas){

    return personas.edad > 25    

}

const edadesf = personas.filter(edadesa)
console.log(edadesf)
*/

/*          PUNTO6
const numeros = [1, 2, 3, 4, 5];

const numerosf = numeros.some((item)=> item > 6)
console.log(numerosf)

*/


/*          PUNTO 7
const numeros = [1, 2, 3, 4, 5];

function numerosff(numeros){

    return numeros > 5
}

const numerosf = numeros.some(numerosff)
console.log(numerosf)
*/

/*           PUNTO 8
const palabras = ['manzana', 'pera', 'banana', 'naranja'];

const palabrasf = palabras.some((item)=> item.length > 3)
console.log(palabrasf)
*/

/*          PUNTO 9
const numeros = [1, 2, 3, 4, 5];

function numerosff(numeros){

    return numeros < 10
}

const numerosf = numeros.every(numerosff)
console.log(numerosf)
*/
          
/*  Punto 10
const numeros = [5, 10, 15, 20, 25];

const resultado = numeros.reduce((total, item)=>{ 
    return (total + item)
})
console.log(resultado)
*/

/*      PUNTO 11
const palabras = ['Hola', ' ', 'Mundo', '!'];

const palabrasc = palabras.join("")
console.log(palabrasc)
*/

/*          PUNTO 12
const numeros = [5, 10, 15, 20, 25];

const resultado = numeros.reduce((total, item)=>item + total)/5
console.log(resultado)
*/

/* PUNTO 13
const numeros = [10, 5, 8, 3, 12];
console.log(Math.max(...numeros))
*/

const numeros = [1, 2, 3, 4, 5];

