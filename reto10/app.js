/*solucion ejercicio 10: este es lo mismo de siempre un array siempre
se recorre con for, el if tiene una condicion cuando es par el resto(%) siempre es 
cero, por lo cual si es distinto de cero es impar por eso es (!==) este significa distinto
de cero en nuestro caso*/
function filterOddElements(array) {
    var nuevoArreglo=[];
    for(var i=0; i<array.length; i++){
        if(array[i]% 2 !== 0){      
            nuevoArreglo.push(array[i])
        }
    }
    return nuevoArreglo
}

//datos del ejemplo
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);
