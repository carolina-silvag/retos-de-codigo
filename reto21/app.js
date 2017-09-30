function convertObjectToList(obj) {
    var key= Object.keys(obj)
    var value= Object.values(obj)
    var agregoArray=[]
    for(var i = 0; i < key.length; i++){
        agregoArray.push([key[i], value[i]])
    }
    return agregoArray
}


//datos del ejemplo
var salida = convertObjectToList ({
  name: 'Holly',
  edad: 35,
  papel: 'productor'
});
console.log (salida);
