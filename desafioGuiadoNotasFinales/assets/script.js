// Pedir notas y mostrarlas en la tabla

// Algoritmo de la tarea
// 1. pedir las nota

var notaHTML1 = prompt("ingresa la nota 1 de HTML: ");
var notaHTML2 = prompt("ingresa la nota 2 de HTML: ");
var notaHTML3 = prompt("ingresa la nota 3 de HTML: ");

// 2. mostrarla en la tabla (imprimir las notas)
// 2.1 capturar el elemento del dom
var txtnotaHTML1 = document.getElementById("txtnotaHTML1");
var txtnotaHTML2 = document.getElementById("txtnotaHTML2");
var txtnotaHTML3 = document.getElementById("txtnotaHTML3");

// 2.2 imprimir el dato en la tabla (resetear las notas en la tabla)
txtnotaHTML1.innerHTML = notaHTML1;
txtnotaHTML2.innerHTML = notaHTML2;
txtnotaHTML3.innerHTML = notaHTML3;

// pasear notas
var notaHTML1 = parseFloat(notaHTML1);
var notaHTML2 = parseFloat(notaHTML2);
var notaHTML3 = parseFloat(notaHTML3);  

// promediar notas
var promedioHTML = (notaHTML1 + notaHTML1 + notaHTML1) / 3;
var txtpromediohHTML = document.getElementById('txtpromediohtml');
txtpromedioHTML.innerHTML = promedioHTML;

//parsear
// parseFloat es la funcion (metodo) y lo que entre comillas lo que necesita para funcionar
//esto va antes de promediar 

//esto no se parsea, porque estaria parseando la caja TD del html
// var notaHTML1 = parseFloat(txtnotaHTML1);

//aqui SI estamos paseando el numero que colocamos con el prom

//recordar que el paseo va antes que el calculo de promedio, la impresion del promedio es lo ultimo que se hace

//los parsefloat en lugar de ir en variables pueden ir en la suma misma 
// var notaHTML1 = parseFloat(notaHTML1);  





