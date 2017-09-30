/* solucion reto 12: es parecido al anteror, a mi siempre me falta colocar punto/coma 
pero igual funciona*/
function findSmallestNumberAmongMixedElements(arr) {
    var numeroMasChico = 10000000;
    for(var i = 0; i < arr.length; i++){
        if(numeroMasChico>arr[i]){
            numeroMasChico = arr[i]
        }
        
    }if(arr.length === 0 ||numeroMasChico === 10000000){
        return ''
    }else{
        return numeroMasChico
    }
}

//datos del ejemplo
var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output);
