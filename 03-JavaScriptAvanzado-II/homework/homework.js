'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
  let counter = 0;
  /*
  1. Retorne una funcion
  2. Funcion retornada lleva un contador
  3. Funcion retornada debe retornar un numero que inicialmente empiece en 1
  4. Nuestra variable contador deberia incrementar con cada invocacion de la funcion retornada
  */
  return function(){
    counter++
    return counter;
  }

}

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
  let cache = {};
  /*
  1. retorne una funcion
  2. Funcion retornada debe recibir un parametro
  3. Funcion retornada debe invocar a la funcion callback(cb)
  4. Guardar el argumento recibido con el resultado obtenido en un objeto
  5. dentro del objeto, el argumento que recibe la funcion retornada seria la clave del objeto
  6. Dentro del objeto, el resultado de la invocacion del callback sera el valor de la propiedad, de acuerdo a su clave
  7. Si exitia la propiedad, retornamos el resultado
  8. Si no existe la propiedad, hacemos el calculo y lo almacenamos en nuestra memoria cache.
  */
  return function (arg) {
    if (cache.hasOwnProperty(arg)) {
      return cache[arg]
    }else{
      return cache[arg] = cb(arg);
    }
  };
}

const cb = function(x) {
  return x * 2;
};

const aquareCache = cacheFunction(cb)
console.log(aquareCache(5))
// console.log(aquareCache(6))
// console.log(aquareCache(5))
//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
console.log(getNombreInstructor());
let getNombreAlumno = getNombre.bind(alumno);
console.log(getNombreAlumno());
/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a 
  continuación, tres funciones que retornen una cadena (string) y el delimitador especificado 
  (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir 
  solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, '*','*');
console.log(textoAsteriscos('Hola'));
let textoGuiones = crearCadena.bind(null, '-','-');
console.log(textoGuiones('Hola'));
let textoUnderscore = crearCadena.bind('Hola','_','_');
console.log(textoUnderscore('Hola'));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
