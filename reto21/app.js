/* solucion reto 21*/
function computeSumBetween(num1, num2) {
    var suma= 0;
    if(num2<num1){
        return 0
    }else{
        for(var i = num1; i<num2; i++){
            suma += i
        }
    }
    return suma
}


//datos del ejemplo
var output = computeSumBetween (2, 5);
console.log (salida);
