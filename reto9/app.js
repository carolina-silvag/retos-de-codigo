
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

/*solucion reto 9: este ejercicio tmbn es largo, lo mejor es ir por parte para saber que se esta haciendo
hay que saber bn como se utilizan los objetos y que se puede hacer con ellos

seguir instrucciones del enunciado y ejemplo*/
function greetCustomer(firstName) {
    var greeting = '';
    if(Object.keys(customerData).indexOf(firstName) == -1){
	    greeting =  'Welcome! Is this your first time?'
    }else if (customerData[firstName]["visits"] == 1){
        greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!"
    }else if(customerData[firstName]["visits"] > 1){
	    greeting =  "Welcome back, " + firstName + "! So glad to see you again!"
	}
  return greeting;
}


//datos del ejemplo
var output = greetCustomer('Carol');
console.log(output);
