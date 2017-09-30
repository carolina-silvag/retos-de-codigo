/* solucion reto 13: mas de lo mismo, hay que tener cuidado con 
las condiciones que te pieden*/

function getLongestWordOfMixedElements(arr) {
    var cadenaMasLarga= '';
    for(var i = 0; i < arr.length; i++){
        if(cadenaMasLarga.length < arr[i].length){
            cadenaMasLarga = arr[i]
        }
        
    }if(arr.length === 0){
        return ''
    }else if(cadenaMasLarga===''){
        return ''
    }else{
        return cadenaMasLarga
    }
}

//dato del ejemplo
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);

