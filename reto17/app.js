/* solucion reto 17: principalmente saber como
se utiliza un objeto*/

function getAllKeys(obj) {
  return Object.keys(obj)
}

//dato del ejemplo
var key=getAllKeys({name: 'Sam', age: 25, hasPets: true})
console.log(key);
