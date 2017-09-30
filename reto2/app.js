//solucion reto 2: buscar como se agrega a un object (ver materia)
function addArrayProperty(word1, word2, word3) {
    return word1[word2]=word3;       
}


//ejemplo de prueba
var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty);