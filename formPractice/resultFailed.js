// variables que almacenan los elementos HTML
let container = document.getElementById('container-text');
let text = document.createElement('h2');

// variable que almacena la información del Local Storage 
let resultado = localStorage.getItem('resultado');
let nombre = localStorage.getItem('nombre');

// Poner el resultado en el texto 
text.innerHTML = `${nombre} tu promedio es de ${resultado}. <br> Lo siento, no has aprobado.`;

// Poner el texto en la página para que se pueda ver
container.append(text);