function getLargestNumberAmongMixedElements(arr) {
    var numeroMayor= 0
    for(var i = 0; i<arr.length; i++){
        if(numeroMayor< arr[i]){
            numeroMayor=arr[i]
        }
    }
    if(arr.length === 0){
        return 0
    }else if(numeroMayor === 0 || numeroMayor === true){
        return 0
    }else{
        return numeroMayor
    }
}

//datos del ejemplo
var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);
