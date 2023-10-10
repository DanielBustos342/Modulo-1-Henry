// Determiná que será impreso en la consola, sin ejecutar el código.

// Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

// La diferencia fundamental entre declarar una variable con var y asignarle un valor 
// directamente es cómo se manejan en el ámbito y el momento de creación de la variable. 
// Aquí hay algunas diferencias clave:

// Ámbito de la variable:

// var: Las variables declaradas con var tienen un ámbito de función o global. Esto 
// significa que son accesibles en todo el ámbito de la función en la que se declaran 
// o en el ámbito global si se declaran fuera de una función.

// Asignación directa: Cuando asignas un valor directamente a una variable sin declararla 
// previamente, la variable se declara automáticamente en el ámbito actual. Si esto ocurre 
// dentro de una función, la variable será local a esa función. Si ocurre fuera de una función, 
// la variable será global.

// Hoisting:

// var: Las variables declaradas con var son susceptibles al "hoisting". Esto significa que 
// la declaración de la variable se mueve al comienzo de su ámbito, pero la asignación se 
// queda en su lugar. Por lo tanto, puedes usar la variable antes de declararla, pero su 
// valor será undefined hasta que se le asigne un valor.

// Asignación directa: Las variables a las que se les asigna un valor directamente también 
// se ven afectadas por el hoisting si se usan antes de asignarles un valor. En este caso, 
// su valor será undefined hasta que se les asigne un valor.

// Re-declaración:

// var: Puedes re-declarar una variable con var dentro del mismo ámbito sin provocar un 
// error. La re-declaración simplemente actualiza el valor de la variable.

// Asignación directa: Si intentas asignar un valor a una variable que ya ha sido declarada, 
// no estarás re-declarando la variable, sino simplemente sobrescribiendo su valor existente.

// En resumen, declarar una variable con var y asignarle un valor directamente dentro del 
// mismo ámbito puede tener resultados similares en cuanto a la capacidad de asignar valores, 
// pero la principal diferencia radica en cómo se manejan en términos de hoisting, 
// re-declaración y alcance. Es importante entender estas diferencias para evitar errores 
// sutiles en tu código.

// ejercicio 1

x = 1;
var a = 5;
var b = 10;

var c = function (a, b, c) { //parametro (8,9,10)
   var x = 10;
   console.log(x);// x = 10
   console.log(a);// a = 8
// -----------------------------------
   var f = function (a, b, c) {//parametro (8,9,10)
      b = a;// b = 8
      console.log(b);// b = 8
      b = c;// b = 10
      var x = 5; 
   };
// -----------------------------------
   f(a, b, c);
   console.log(b);// b = 9
};
c(8, 9, 10); // --> empieza
console.log(b);// b = 10
console.log(x);// x = 1


//ejercicio 2

console.log(bar);// bar = undefined
//console.log(baz);// baz = sin un let var o const el hosting no funciona
foo();// no retorna nada
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;

//ejercicio 3

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);// 'Franco'

//ejercicio 4

var instructor = 'Tony';
console.log(instructor);//'Tony'
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);//'Franco'
   }
})();
console.log(instructor);//'Tony'

//ejrcicio 5

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);//'The Flash'
   console.log(pm);//'Reverse Flash'
}
console.log(instructor);//'the Flash'
console.log(pm);//'Franco'

// ### Coerción de Datos
// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

//ejercicio 6 

console.log(6 / "3") // = 2
console.log("2" * "3") // = 6
console.log(4 + 5 + "px") // = 9px
console.log("$" + 4 + 5) // = $45
console.log("4" - 2) // = 2
console.log("4px" - 2) // = Nan
console.log(7 / 0) // Infinity
console.log({}[0]) // undefined
console.log(parseInt("09")) // = 9
console.log(5 && 2) // '2'
console.log(2 && 5) // '5'
console.log(5 || 0) // '5'
console.log(0 || 5) // '5'
console.log([3]+[3]-[10]) // = '23'
console.log(3>2>1) // false
console.log([] == ![]) // true

// ### Hoisting
// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//ejercicio 7

function test() {
    console.log(a);// undefined
    console.log(foo());// 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();

 // se muestra lo que retorna la funcion (2), no la variable ni los console.log()

 //ejercicio 8 

 var snack = 'Meow Mix';

 function getFood(food) {
     if (food) {
       var snack = 'Friskies';
      console.log(snack);// no pasa por aqui
   }
   console.log(snack);//undefined
}

getFood(false);//empieza

// ### This
// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

//ejercicio 9

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//'Aurelio De Rosa'

var test = obj.prop.getFullname;//undefined

console.log(test());//undefined

// Cuando se llama a obj.prop.getFullname(), dentro del contexto de esa llamada, this se refiere al objeto 
// obj.prop. Por lo tanto, this.fullname dentro de getFullname apunta a 'Aurelio De Rosa', que es el valor de 
// fullname en ese contexto.

// Sin embargo, cuando haces var test = obj.prop.getFullname; y luego llamas a test(), this ya no se refiere a obj.prop
// ni a obj. En cambio, this se convierte en el objeto global (en un entorno de navegador, es window). Dado que el 
// objeto global no tiene una propiedad fullname, this.fullname se evalúa como undefined.

// ### Event loop
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

//ejercicio 10 

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();
 // 1 - 4 - 3 - 2