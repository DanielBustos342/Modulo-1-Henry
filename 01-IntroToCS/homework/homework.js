'use strict';

function BinarioADecimal(num) {

   let decimal = 0;
   const arrayNum = num.split('').reverse();

   arrayNum.forEach((elemento,indice) => {
      if (elemento === '1') {
         decimal += Math.pow(2 , indice)
      }
   });
   return decimal;
}

function DecimalABinario(num) {

   let binario = '';

   while (num > 0) {
      binario = (num % 2) + binario;
      num = Math.floor(num / 2);
   }
   return binario;
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

