/* soluciones reto 15: recorrerlo y mientras lo hace que sume 
s*/
function computeSumOfAllElements(arr) {
    var suma= 0
    for(var i=0; i<arr.length; i++){
        suma += arr[i]
    }
    return suma
}

//datos del ejemplo
var output = computeSumOfAllElements([1, 2, 3]);
console.log(output);
