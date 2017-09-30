/* solucion reto 16: este tiene varias maneras de hacerse
yo utilize esta porque me acomodaba, pero tmbn se 
podia utilizar slice para cortar y guardar en variables el valor*/

function transformFirstAndLast(array) {
    var objeto ={}
    objeto[array.shift()] = array.pop()
    return objeto
}

//datos del ejemplo
var primeroUltimo=transformFirstAndLast(['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey'])
console.log(primeroUltimo);
