var camposFormulario = {
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: ''
}


function leerTextoNombre(evento) {
    camposFormulario.nombre = evento.target.value;
    console.table(camposFormulario);
}

function leerTextoTelefono(evento) {
    camposFormulario.telefono = evento.target.value;
    console.table(camposFormulario);
}

function leerTextoCorreo(evento) {
    camposFormulario.correo = evento.target.value;
    console.table(camposFormulario);
}

function leerTextoMensaje(evento) {
    camposFormulario.mensaje = evento.target.value;
    console.table(camposFormulario);
}

function leerTexto(evento) {
    camposFormulario[evento.target.id] = evento.target.value;
    console.table(camposFormulario);
}


function mostrarMensajeError(mensaje) {

    const bloqueError = document.createElement('p');

    bloqueError.textContent = mensaje;

    bloqueError.classList.add('mensajeError');

    formulario.appendChild(bloqueError);


    setTimeout(function() {
        bloqueError.remove();
    }, 5000);
}

function mostrarMensajeOk(mensaje) {

    const bloqueOk = document.createElement('p');

    bloqueOk.textContent = mensaje;

    bloqueOk.classList.add('mensajeOk');

    formulario.appendChild(bloqueOk);


    setTimeout(function() {
        bloqueOk.remove();
    }, 5000);
}

function mostrarMensaje(mensaje, bandera) {

    const bloque = document.createElement('p');

    bloque.textContent = mensaje;

    if (bandera === 'Correcto') {
        bloque.classList.add('mensajeOk');
    } else {
        bloque.classList.add('mensajeError');
    }
    formulario.appendChild(bloque);

    setTimeout(function() {
        bloque.remove();
    }, 5000);
}

function validarFormulario(evento) {
    evento.preventDefault();

    if (camposFormulario.nombre === '' || camposFormulario.telefono === '' || camposFormulario.correo === '' || camposFormulario.mensaje === '') {

        mostrarMensaje("Todos los campos son obligatorios", 'Error');

        return;
    }

    mostrarMensaje("Información enviada correctamente", 'Correcto');
}

const Nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario-contacto');


Nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);



formulario.addEventListener('submit', validarFormulario);


function imprimirEnConsola() {

}


window.addEventListener('load', imprimirEnConsola);

window.addEventListener('scroll', function() {

});


window.addEventListener('DOMContentLoaded', function() {

});
window.addEventListener('DOMContentLoaded', function() {

});


const botonEnviar = document.querySelector('#botonEnviar');
console.log(botonEnviar);
botonEnviar.addEventListener('click', function(miEvento) {
    console.log(miEvento);
    miEvento.preventDefault();
    console.log("Enviando datos del formulario");
});



console.clear();
const nombre = document.querySelector('#nombre');

nombre.addEventListener('change', function() {
    console.log("Escribiendo...");
});

nombre.addEventListener('input', function(evento) {
    console.log(evento);
    console.log("Escribiendo...");
});S