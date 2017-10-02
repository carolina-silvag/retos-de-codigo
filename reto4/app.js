/*solucion reto 4: tenia que eliminar una propiedad que tuviera una cadena de texto
y esta tuviera un largo mayor a num, utilize for para recorrer solo una parte de obj 
debido a que un objeto no se puede recorrer con length (ver materia ahi sale la forma)*/

function removeStringValuesLongerThan(num, obj) {
    var array= Object.keys(obj)
    for(var i = 0; i< array.length; i++){
        if (obj[array[i]].length >= num){   
            delete obj[array[i]]
        }
    }
    return obj
}

// datos del ejemplo
var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj);


// otra manera de hacerlo mas sencilla
/*function removeStringValuesLongerThan(num, obj) {
    for(var i in obj){
        if (obj[i].length > num){   
            delete obj[i];
        }
    }
    return obj
}
*/