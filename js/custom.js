$(document).ready(function() {
    $(".readall-button").on("click", function(){
        $(this).toggleClass("active");
    });
});

$(document).ready(function() {
    $('#fadeButton').click(function() {
        $('#myDiv').fadeIn(); // You can also specify duration: .fadeIn('slow'), .fadeIn('fast'), or .fadeIn(milliseconds)
    });

    $('#mobhamburger').click(function() {
        $('#myDiv').fadeOut(); // You can also specify duration: .fadeIn('slow'), .fadeIn('fast'), or .fadeIn(milliseconds)
    });
});

$('.slimmenu').slimmenu(
{
    resizeWidth: '991',
    collapserTitle: '',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: ''
});