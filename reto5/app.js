/* solucion reto 5: buscar como utilizar split y join
split() transforma un str a una lista de array,
ademas si se utiliza split("  ") o split('with') como en el ejemplo,
a parte de tranformar en un array el str, tmbn borra los espacion o with
depende de lo que quiere quitar
join() junta todo los que esta dentro de una lista array transformandolo 
en un str, pero ademas join(" ") agrega
*/
function convertDoubleSpaceToSingle(str) {
    return str.split("  ").join(" ")
}

//datos de ejemplo
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);