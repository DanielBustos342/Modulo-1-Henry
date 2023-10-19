function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

/*
  *  si(el nodo del árbol es igual al valor que vamos a ingresar){
    ? opción 1 -> lo enviamos a la izquierda o a la derecha, lo que decidamos
    ? opción 2 -> No recibimos valores iguales -> throw "Error" - mensaje: "No valores repetidos"
  * }

 * si(el valor a ingresar es menor al nodo del árbol){
    ? si(no hay nodo izquierdo, es decir null){
        ! El valor que recibimos lo ubicamos en ese nodo.
    ? }
    ? sino {
       ! aplicamos recursión, llamando nuevamente al método de agregar, no nos olvidemos de revalidar con el valor a buscar, su caso de corte es cuando un nodo referencia a null.
    ?}
 * }
* si(el valor a ingresar es mayor al nodo del árbol){
    ? si(no hay nodo derecho, es decir null){
        ! El valor que recibimos lo ubicamos en ese nodo.
    ? }
    ? sino {
       ! aplicamos recursión, llamando nuevamente al método de agregar, no nos olvidemos de revalidar con el valor a buscar, su caso de corte es cuando un nodo referencia a null.
    ?}
*}
*/

BinarySearchTree.prototype.insert = function(valor){
    // if(valor === this.value) return 'No recibimos valores repetidos';
    if(valor <= this.value){
        if(this.left === null){ //caso de corte
            let newTree = new BinarySearchTree(valor)
            this.left = newTree;
        }
        else{
            this.left.insert(valor)
        }
    }else{
        if(!this.right){
            let newTree = new BinarySearchTree(valor)
            this.right = newTree
        }else {
            this.right.insert(valor)
        }
    }
}

BinarySearchTree.prototype.search = function(valor){
    if(valor === this.value) return this.value;
    if(valor < this.value && this.left !== null)return this.left.search(valor)
    
    if(valor > this.value && this.right !== null) return this.right.search(valor)
    else return 'El valor no está guardado en nuestro árbol'
}

let arbol = new BinarySearchTree(8);
arbol
arbol.insert(6)
arbol.insert(9)
arbol
arbol.insert(3)
arbol
console.log(arbol.search(3));

