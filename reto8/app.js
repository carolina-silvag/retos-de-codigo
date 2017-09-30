/*solucion reto 8: este es super largo en verdad, si lo hacen por paso
para recorrer array siempre se utilizan for en este caso use dos
porque debo buscar 2 valor cuya suma sea igual a number*/

function findPairForSum(array, number){
    for(var i=0; i < array.length; i++){
        for(var j=0; j < array.length; j++){
            if(array[i] + array[j] == number && i != j){
                return [array[i], array[j]]
            }
        }
    }
}

//datos ejemplo
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);
