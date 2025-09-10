$(document).ready(function() {
    $(".readall-button").on("click", function(){
        $(this).toggleClass("active");
    });

    // Function to toggle content
    function toggleContent(element) {
        var container = element.closest('.test-custom');
        var content = container.find('.expandable-content');
        var arrow = container.find('.arrow-icon');

        if (content.is(':visible')) {
            content.slideUp(300);
            arrow.css('transform', 'rotate(0deg)');
        } else {
            content.slideDown(300);
            arrow.css('transform', 'rotate(180deg)');
        }
    }

    // H3 click functionality
    $(".expandable-heading").on("click", function(){
        toggleContent($(this));
    });

    // Arrow click functionality
    $(".arrow-icon").on("click", function(){
        toggleContent($(this));
    });
});

    $(".readall-button2").on("click", function(){
        $(this).toggleClass("active");
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