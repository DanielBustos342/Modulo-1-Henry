'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del 
  árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en 
  cualquiera de sus variantes, según se indique por parámetro ("post-order", 
  "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el 
  recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen 
  bst.png dentro del directorio homework.
*/
function BinarySearchTree(valor) {
   this.value = valor;
   this.left = null;
   this.right = null;

   BinarySearchTree.prototype.size = function () {
      // * caso base -> si las referencias del nodo apuntan a nulo
      if(!this.left && !this.right) return 1;

      // * cuando nuestro nodo padre tiene un solo hijo
      if(!this.right) return 1 + this.left.size();
      if(!this.left) return 1 + this.right.size();

      // * cuando nuestro nodo padre tiene ambos hijos
      return 1 + this.left.size() + this.right.size();
   };


   // * esta en la demo como se hace
   BinarySearchTree.prototype.insert = function (valor) {
      if(valor < this.value){
         if(!this.left){
            let myTree = new BinarySearchTree(valor);
            this.left = myTree;
         }else{
            this.left.insert(valor);
         }
      }else{
         if(!this.right){
            let myTree = new BinarySearchTree(valor);
            this.right = myTree;
         }else{
            this.right.insert(valor);
         }
      }
   };

   BinarySearchTree.prototype.depthFirstForEach = function (cb,valor) {
      if(valor === 'in-order' || valor === undefined){
         // * nodo izquierdo - nodo raiz - nodo derecha
         this.left && this.left.depthFirstForEach(cb,valor);
         cb(this.value);
         this.right && this.right.depthFirstForEach(cb,valor);
      }
      if(valor === 'pre-order'){
         // * nodo raiz - nodo izquierda - nodo derecha
         cb(this.value);
         this.left && this.left.depthFirstForEach(cb,valor);
         this.right && this.right.depthFirstForEach(cb,valor);
      }
      if(valor === 'post-order'){
         // * nodo izquierda - nodo derecha - nodo raiz
         this.left && this.left.depthFirstForEach(cb,valor);
         this.right && this.right.depthFirstForEach(cb,valor);
         cb(this.value);
      }
   };

   BinarySearchTree.prototype.breadthFirstForEach = function (cb,arreglo=[]) {
      // if(!arreglo){
      //    var arreglo = [];
      // }

      cb(this.value);
      this.left && arreglo.push(this.left);
      this.right && arreglo.push(this.right);

      arreglo.length && arreglo.shift().breadthFirstForEach(cb,arreglo)
   };

   BinarySearchTree.prototype.contains = function (valor) {
      if(valor === this.value) return true;
      if(valor < this.value){
         if(this.left) return this.left.contains(valor);
      }else if(valor > this.value){
            if(this.right) return this.right.contains(valor);
      } 
      return false;
   };
}

// let miArbol = new BinarySearchTree(20);
// console.log(miArbol);
// miArbol.insert(8);
// miArbol.insert(4);
// miArbol.insert(15);
// miArbol.insert(5);
// miArbol

// let testArr = [];

// function prueba(valor) {
//    testArr.push(valor);
// }

// miArbol.depthFirstForEach(prueba);

// console.log(testArr);
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
