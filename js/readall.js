$(document).ready(function () {
            $('.test').readall({
                // Default values
                showheight: 70,                         // height to show
                showrows: null,                         // rows to show (overrides showheight)
                animationspeed: 200,                    // speed of transition
                btnTextShowmore: 'Read more',           // text shown on button to show more
                btnTextShowless: 'Read less',           // text shown on button to show less
                btnClassShowmore: 'readall-button',     // class(es) on button to show more
                btnClassShowless: 'readall-button'      // class(es) on button to show less
            });
});