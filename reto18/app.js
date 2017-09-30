/* solucion reto 18: saber como crear objetos 
y como utilizar array (revizar materia)*/

function fromListToObject(array) {
  var lista = {}
  for (var i= 0; i< array.length; i++){
      lista[array[i][0]] = array[i][1]
  }
  return lista
}

var resultado=fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(resultado);