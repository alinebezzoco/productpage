// Exibir todas as cores do filtro busca
$(document).ready(function() {
    $('#ver-todas').click(function() {
            $('.mais-cores').slideToggle("slow");
            $(this).hide();
    });
});