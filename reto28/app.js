function getProductOfAllElementsAtProperty(obj, key) {
    var producto = 1
    if(typeof obj[key]!="object"){
        return 0
    }else if(Object.keys(obj).indexOf(key) == -1){
        return 0
    }else if(obj[key].length === 0){
        return 0
    }else{
        for(var i=0; i<obj[key].length; i++){
            producto *= obj[key][i]
        }
    }
    return producto
}

//datos ejemplo
var obj = {
key: [1, 2, 3, 4];
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output);
