function getLongestOfThreeWords(word1, word2, word3) { 
    if(word1.length >=word2.length && word1.length >= word3.length ){
        return word1
    }else if(word2.length > word1.length && word2.length >= word3.length){
        return word2
    }else if(word3.length > word1.length && word3.length > word2.length){
        return word3
    }
}

//datos del ejemplo
var output = getLongestOfThreeWords('estos', 'tres', 'palabras');
console.log(salida);
