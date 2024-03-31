// script.js
$(document).ready(function() {
    // Slider de testimonios
    $('.testimonios-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true
    });

    // Validación de formulario de contacto
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Aquí puedes agregar código para enviar el formulario
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        $(this)[0].reset();
    });

    // Suavizar desplazamiento de enlaces dentro de la página
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80 // 80 es la altura del encabezado fijo
            }, 800);
        }
    });
});