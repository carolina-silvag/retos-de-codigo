function addFullNameProperty(obj) {
    var nombreArray= Object.values(obj)
    obj['fullName']=nombreArray.join(' ')
    return obj
}

//datos del ejemplo
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName);
