function getSumOfAllElementsAtProperty(obj, key) {
    var suma = 0
    if(typeof obj[key]!="object"){
        return 0
    }else if(Object.keys(obj).indexOf(key) == -1){
        return 0
    }else if(obj[key].length === 0){
        return 0
    }else{
        for(var i=0; i<obj[key].length; i++){
            suma += obj[key][i]
        }
    }
    return suma
}

//datos ejemplo
var obj = {
key: [4, 1, 8];
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output);
