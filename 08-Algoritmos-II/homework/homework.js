'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const arreglo = [5, 1, 4, 2, 8];
const arreglo2 = [10, 10, 16, 12];
const arreglo3 = [10, -2, -7, 4];

const arrayOrdenado = quickSort(arreglo);
const arrayOrdenado2 = quickSort(arreglo2);
const arrayOrdenado3 = quickSort(arreglo3);
console.log(arrayOrdenado);
console.log(arrayOrdenado2);
console.log(arrayOrdenado3);

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array; // Un arreglo de 0 o 1 elementos ya está ordenado.
  }

  // Dividir el arreglo en mitades izquierda y derecha
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Llamadas recursivas para ordenar las mitades izquierda y derecha
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Combinar las dos mitades ordenadas
  return merge(leftSorted, rightSorted);
}

// Función para combinar dos arreglos ordenados en uno solo
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const arrayOrdenado4 = mergeSort(arreglo);
const arrayOrdenado5 = mergeSort(arreglo2);
const arrayOrdenado6 = mergeSort(arreglo3);
console.log(arrayOrdenado4);
console.log(arrayOrdenado5);
console.log(arrayOrdenado6);
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
