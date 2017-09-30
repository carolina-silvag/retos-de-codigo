/*solucion reto 11: este hay varias maneras de hacerlo y es largo, 
el arr que es un arreglo lo recorri con el for como siempre,
para poder encontrar el texto mas corto, hay que tener cuidado cuando el arr que
te dan son por ejemplo solo numeros, en ese caso return '' 

seguir instrucciones del enunciado*/

function findShortestWordAmongMixedElements(arr) {
    var cadenaMasCorta= 'abcdefghijklmnopqrstuvwwxyz';
    for(var i = 0; i < arr.length; i++){
        if(cadenaMasCorta.length > arr[i].length){
            cadenaMasCorta = arr[i]
        }
        
    }if(arr.length === 0 || cadenaMasCorta==='abcdefghijklmnopqrstuvwwxyz'){
        return ''
    }else{
        return cadenaMasCorta
    }
}

//dato del ejemplo
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output);