/* solucion reto 7: este es dificil de explicar porque se necesitar saber como 
sacar valores de un objeto cuando te dan key y su index, tmbn hay que seguir instrucciones
para realizar los if cuando se undefined*/

function getElementOfArrayProperty(obj, key, index){
    if(typeof obj[key]!="object"){
        return undefined
    }else if(Object.keys(obj).indexOf(key) == -1){
        return undefined
    }else if(obj[key].length -1  < index){
        return undefined
    }else{
       return obj[key][index]
    }
}

//datos de ejemplo
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); 
