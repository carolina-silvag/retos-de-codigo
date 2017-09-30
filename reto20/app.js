/* solucion reto 20: complicado de explicar por aca
tiene muchos pasos a seguir, en este caso es importante crear 
variables vacias para array y objeto para poder guardar valores*/
function transformEmployeeData(array) {
  var final=[]
  var obj1={}
  var obj2={}
  for(var i=0; i < array.length; i++){
      for(var j= 0; j<array[i].length; j++){
          if (i===0){
              obj1[array[i][j][0]]= array[i][j][1]
          }
          if(i===1){
              obj2[array[i][j][0]]= array[i][j][1]
          }
      }
  }
  final.push(obj1)
  final.push(obj2)
  return final
}
