'use strict';

const { prototype } = require("@11ty/eleventy");

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y 
    de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con 
  una particularidad: el parámetro puede ser un valor o un callback. 
  En el primer caso, buscamos un nodo cuyo valor coincida con lo 
  buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado 
  como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando 
  recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
// ! crear una clase para porder crear nuestra lista
function LinkedList() {
  this.head = null;
}

// ! crear un nodo
function Node(value) {
  this.value = value;
  this.next = null;
}

// ! add: agrega un nuevo nodo al final de la lista
LinkedList.prototype.add = function (valor) {
  let newNode = new Node(valor);
  let current = this.head;
  // ? verifica el contenido de un bloque
  if (!this.head) {
    this.head = newNode;
  }
  // ? avanzar bloques
  else{
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  
}

LinkedList.prototype.remove = function () {
  let current = this.head;
  // console.log(current);
// ? Si la lista estavacia
  if (!this.head) return null;
// ? si la lista tiene un solo nodo
  if (current.next === null) {
    this.head = null;
    // console.log(current);
    return current.value;
  }
// ? si la lista tiene mas de un nodo
  else{
    while (current.next.next) {
      current = current.next;
    }
    let lastValue = current.next.value;
    current.next = null;
    return lastValue;
  }
}

LinkedList.prototype.search = function (valor) { // valor o function callback
  let current = this.head;
  while (current) {
    if (typeof valor !== 'function') {
      if (valor === current.value) return current.value;  
    } else if (valor(current.value)) return current.value;
    current = current.next;
  }
  return null;
}

// let nuevaLista = new LinkedList();
// console.log(nuevaLista.remove());

// nuevaLista;
// nuevaLista.add('Max');
// nuevaLista.remove();

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, 
  o casilleros; es decir, posiciones posibles para almacenar la información), donde 
  guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber 
  pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la 
  clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe 
  un input alfabético, suma el código numérico de cada caracter del input (investigar 
    el método charCodeAt de los strings) y calcula el módulo de ese número total por la 
    cantidad de buckets; de esta manera determina la posición de la tabla en la que se 
    almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave 
  invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket 
  correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla 
  con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo 
chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, 
invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket 
específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
//? metodo hash: funcion que designa un lugar en el locker
HashTable.prototype.hash = function (string) {// 'instructora'
  // charCodeAt()
  let acumulador = 0;
  for (let i = 0; i < string.length; i++) {
    acumulador += string.charCodeAt(i);    
  }
  //console.log(acumulador % this.numBuckets);
  return acumulador % this.numBuckets;
}
// ? metodo set: ingresar nuevos datos en nuestra HashTable
HashTable.prototype.set = function (key, value) {
  if (typeof key !== 'string') throw TypeError ('Keys must be strings');

  let position = this.hash(key); //24

  // * subestructura de objeto -> manejar colisiones
  if (!this.buckets[position]) this.buckets[position] = {}

  // * crear la propiedad ejemplo: {instructora: 'Ani'}
  this.buckets[position][key] = value;
}

// ? funcion get -> buscar la informacion de mi locker...
HashTable.prototype.get = function (key) {
  let position = this.hash(key) //24
  return this.buckets[position][key];
}

// ? funcion hasKey: verificar si el dato esta guardado en nuestro locker...
HashTable.prototype.hasKey = function (key) {
  // * primera forma:
  // let chechInfo = this.get(key);
  // if(chechInfo) return true;
  // return false;
  // * segunda forma subestructura de objeto
  let position = this.hash(key);
  if(this.buckets[position]) return this.buckets[position].hasOwnProperty(key);
  return false;
}


let hashear = new HashTable();
hashear
hashear.hash('foo')
hashear.set('foo','bar1')
hashear
hashear.hash('ofo')
hashear.set('ofo','bar2')
console.log(hashear.get('foo'));
hashear
console.log(hashear.hasKey('foo'))
console.log(hashear.hasKey('asd'))


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
