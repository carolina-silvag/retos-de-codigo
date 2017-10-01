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

// Otra forma de hacerlo, se crea una variable que contiene el arreglo  (los valores del key).
// se crea la condicion de que si la propiedad no es un array, devuelve undefined 
// se crea otra condicion de que si el indice dentro de key es mayor a los que contiene, devuelve undefined. Ademas esta condicion comprueba que si el array esta vacio
// por ultimo se crea una condicion de que si el array no existe, devuelve undefined ( cuando llamo a algo que no existe, la consola devuelve "undefined")
// luego se filtrar la informacion, se comienza a trabjar buscando el index dentro del array y esto devuelve el elemento del index
  
/*function getElementOfArrayProperty(obj, key, index) {
   var x = obj.key;
      
   if (typeof x != "object" ){
        return undefined;
   }
   if (key[index] === undefined){
        return undefined
   }
   if (obj.key === undefined){
        return undefined
   }
   var y = x[index];
   return y
    
 }*/