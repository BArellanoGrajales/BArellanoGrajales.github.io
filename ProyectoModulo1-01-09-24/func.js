// Inicializa Isotope (biblioteca de java Script) en el contenedor de la galeria
var $galleryContainer = $('.galeria').isotope({
    itemSelector: '.caja',
    layoutMode: 'fitRows'
});

// Maneja el clic en los botones de filtro
$('.grupodebotones .boton').on('click', function(){
    // Elimina la clase 'active' de todos los botones
    $('.grupodebotones .boton').removeClass('active');
    
    // Agrega la clase 'active' al botón que fue clicado
    $(this).addClass('active');

    // Obtiene el valor del filtro desde el atributo data-filter
    var value = $(this).attr('data-filter');
    
    // Filtra los elementos de la galería usando Isotope
    $galleryContainer.isotope({
        filter: value 
    });
});

// Código comentado que cierra Bootstrap
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
