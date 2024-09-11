document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contacto');
    
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            alert(`Gracias, ${nombre}! Tu mensaje ha sido enviado.`);
            formulario.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});