/* solucion reto 19: muy parecido a uno anterior
hay que saber que Object.keys(objeto) llama las propiedades 
de un objeto y los entrega en un array y Object.values(objeto)
llama a los valores y los entrega en un array*/
function listAllValues(obj) {
  return Object.values(obj)
}

//datos ejemplo
var result = listAllValues({name: 'Krysten', age: 33, hasPets: false})
console.log(result);
