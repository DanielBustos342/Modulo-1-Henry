'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo 
n un número natural, su factorial (representado como n!) es el producto de n por todos 
los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando 
al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que 
cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último 
elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema 
pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/


function nFactorial(n) {
  /* 
  * 5! = 5 * 4 * 3 * 2 * 1
  * 4! = 4 * 3 * 2 * 1
  * 3! = 3 * 2 * 1
  * 2! = 2 * 1
  * 1! = 1
  * 0! = 1
  */
 // !forma recursiva
  if (n === 0 || n === 1) {
    return 1;
  }else{
    return n * nFactorial(n - 1);
  }
  // !forma iterativa
  // if (n < 0) {
  //   return false;
  // }
  // if (n === 1 || n === 0) {
  //   return 1;
  // }
  // let resultado = n;

  // while (n > 1) {
  //   resultado *= (n - 1);
  //   n--;
  // }
  // return resultado;
}
// console.log(nFactorial(7));
console.log(nFactorial(4));

function nFibonacci(n) {
  // !forma recursiva
  if (n <= 1) {
    return n;
  }else{
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
  // !forma iterativa
  // if (n < 2) {
  //   return n;
  // }
  // let array = [];

  // array[0] = 0;
  // array[1] = 1;
  // console.log(array)

  // for (let i = 2; i <= n; i++) {
  //   array[i] = array[i - 2] + array[i - 1];
  // }
  // return array[n];
  // return array.pop()
}
console.log(nFibonacci(4));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer 
elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue 
  está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
// class Queue {
//   constructor(){
//     this.items = [];
//   }
// !enqueue: agrega un valor respetando el orden
//   enqueue(item){
//     this.items.push(item);
//   }
// !dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía
//   dequeue(){
//     if (this.isEmpaty()) {
//       return undefined; // La cola esta vacia
//     }else{
//       return this.items.shift();
//     }
//   }
//   isEmpaty(){
//     return this.items.length === 0;
//   }
// !size: retorna el tamaño (cantidad de elementos) de la queue.
//   size(){
//     return this.items.length;
//   }
// }

// const cola = new Queue();
// console.log(cola.size());

function Queue() {
  this.array = [];
}
Queue.prototype.enqueue = function (data) {
  this.array.unshift(data);
}
Queue.prototype.dequeue = function(){
  return this.array.pop();
}
Queue.prototype.size = function () {
  return this.array.length;
}

let queue = new Queue();

console.log(queue.enqueue());
console.log(queue.dequeue());
queue.enqueue('Pedro');
queue.enqueue('Jose');
queue.enqueue('Alberto');
queue.enqueue('Roberto');

console.log(queue.size());
queue.dequeue()
console.log(queue.size());
queue
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
