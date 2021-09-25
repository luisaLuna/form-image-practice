// variables que almacenan los inputs 
let nombre = document.getElementById('nombre');
let calculo = document.getElementById('calculo');
let programacion = document.getElementById('programacion');
let web = document.getElementById('web');

let boton = document.getElementById('btn');

boton.addEventListener('click', (e) => {
    e.preventDefault();

    // Traer el valor del input y convertirlo a número
    let vCalculo = parseInt(calculo.value);
    let vProgramacion = parseInt(programacion.value);
    let vWeb = parseInt(web.value);

    // calcular el promedio (se suman todos los valores y se divide entre 3)
    let resultado = (vCalculo + vProgramacion + vWeb) / 3;
    
    // se guarda el resultado en el LocalStorage
    localStorage.setItem('resultado', resultado);

    // guardar el nombre en el localStorage
    let vNombre = nombre.value;
    localStorage.setItem('nombre', vNombre);

    // condicional que decide si aprobó o reprobó y redirecciona a una URL que da el resultado
    if (resultado > 5) {
        location.href = 'resultApproved.html';
    } else {
        location.href = 'resultFailed.html';
    }
} )