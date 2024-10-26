window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const logo = document.querySelector('.logo');
    const header = document.querySelector('header');

    // Muestra el logo después de 1 segundo
    setTimeout(function() {
        logo.style.opacity = '1';
    }, 1000);

    // Espera 3 segundos para ocultar el preloader y mostrar el contenido
    setTimeout(function() {
        preloader.style.opacity = '0'; // Transición de opacidad en el preloader
        preloader.style.transition = 'opacity 1s ease'; // Transición suave

        // Espera la finalización de la transición para eliminar el preloader
        setTimeout(function() {
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1'; // Transición suave al contenido
            header.style.display = 'block';
        }, 1000); // Tiempo suficiente para que la opacidad llegue a 0
    }, 3000);
});


    // Aquí va el script de la fecha
    // Obtiene la fecha actual
    var fecha = new Date();

    // Formatea la fecha en el formato deseado
    var opciones = { 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
    };

    // Convierte la fecha a formato español
    var fechaFormateada = fecha.toLocaleDateString("es-ES", opciones).toUpperCase();

    // Inserta la fecha en el elemento con id 'fecha'
    document.getElementById("fecha").textContent = fechaFormateada;
    
    // Elimina la clase del preloader y activa la clase 'loaded'
    document.body.classList.add('loaded');