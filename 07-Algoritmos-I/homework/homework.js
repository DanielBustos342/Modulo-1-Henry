'use strict'
// No cambies los nombres de las funciones.

// Factorear el número recibido como parámetro y devolver en un array
// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos 
// números primos
// Tu código:
function factorear(num) {
  if(num < 1){
    return 'No toma valores negativos'
  }
    const factoresPrimos = [];
    let divisor = 2;

    while (num > 1) {
      while (num % divisor === 0) {
        factoresPrimos.push(divisor);
        num /= divisor
      }
      divisor++;
    }
    if (factoresPrimos.length === 0 || factoresPrimos[0] !== 1) {
      factoresPrimos.unshift(1); // Agregar 1 como factor si no estaba presente.
    }

    return factoresPrimos
}
const resultado = factorear(180)
console.log(resultado);

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  const n = array.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - 1; j++) {
      if(array[j] > array[j + 1]){
        [array[j],array[j + 1]] = [array[j +1], array[j]]; 
        swapped = true
      }
    }
    if(!swapped) break;
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const n = array.length;
  for (let i = 0; i < n; i++) {
    const current = array[i];
    let j = i - 1;
    
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i; j < n; j++) {
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
