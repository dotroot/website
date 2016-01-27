// preload images
$('.modal-thumb').each( function () {
    img = new Image();
    img.src = $(this).data('modal-src');
});

$('.modal-thumb').on('click', function () {
    var title = $(this).data('modal-title'),
        src = $(this).data('modal-src'),
        captiontext = $(this).data('modal-caption');
    
    $('#modal h4').text(title);
    $('#modal img').attr('src', src);
    $('#modal h5').text(captiontext);

    $('#modal').modal('show');
});


$('#modal').on('show.bs.modal', function () {
       $(this).find('.modal-body').css({
              width:'auto', //not needed
              height:'auto', //not needed 
              'max-height':'30%'
       });
    $(this).find('.modal-src').css({
              width:'30px', //not needed

       });
});