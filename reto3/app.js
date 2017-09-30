/* solucion reto 3: aqui busque si length contaba un array,
ya que length me cuenta, pense si este es mayor a cero no se indefine(undefined)
y me entregara el numero de la posicion (n), por eso array[n],
de lo contrario, si no tuviera valores el array me retornara(return) undefined*/

function getNthElement(array, n) {
  if(array.length > 0){
      return array[n];
  }else{
      return undefined;
  }
}

//valores de ejemplo, para llamar la funcion y se imprima en consola
var output = getNthElement([1, 3, 5], 1);
console.log(output);