/*
 * jQuery.ReadAll ia a jQuery plugin to shrink large blocks of content and place a read more button below.
 * Created by Anders Fj�llstr�m - anders@morriz.net - http://www.morriz.net
 * For documentation see https://github.com/morriznet/jquery.readall
 * Released under MIT license
 * version 1.1
 */

(function ($) {
    $.fn.readall = function (options) {
        var settings = $.extend({
            showheight: 96,                         // default
            showrows: null,
            animationspeed: 200,
            btnTextShowmore: 'Read more',
            btnTextShowless: 'Read less',
            btnClassShowmore: 'readall-button',
            btnClassShowless: 'readall-button',
            responsiveHeights: {                    // 👈 new: custom breakpoints
                0: 50,
                480: 52,
                768: 58,       // default for small screens
                992: 58,    // >=576px
                1025: 60,    // >=768px
                1300: 70,    // >=992px
                1401: 80    // >=1200px
            }
        }, options);

        $(this).each(function () {
            var $this = $(this),
                fullheight = function () { return $this[0].scrollHeight; },
                wrapperclass = 'readall-wrapper',
                hiddenclass = 'readall-hide';

            // get current responsive showheight
            function getResponsiveHeight() {
                var winW = $(window).width();
                var chosen = settings.showheight; // fallback
                $.each(settings.responsiveHeights, function (breakpoint, value) {
                    if (winW >= breakpoint) chosen = value;
                });
                return chosen;
            }

            if (settings.showrows != null) {
                var lineHeight = Math.floor(parseFloat($this.css('font-size')) * 1.5);
                settings.showheight = lineHeight * settings.showrows;
            }

            $this.addClass('readall').css({ 'overflow': 'hidden' });

            var onResize = function (event) {
                // update showheight based on breakpoint
                settings.showheight = getResponsiveHeight();

                var _button = $this.parent().find('button.' + settings.btnClassShowmore.replace(/\s+/g, '.') + ', button.' + settings.btnClassShowless.replace(/\s+/g, '.'));

                if (fullheight() > settings.showheight + $(_button).outerHeight()) {
                    if (!$(_button).is(':visible') || event == null) {
                        $this.css({ 'height': settings.showheight + 'px', 'max-height': settings.showheight + 'px' });
                        $(_button).text(settings.btnTextShowmore);
                        $this.addClass(hiddenclass);
                        $(_button).removeClass(settings.btnClassShowless).addClass(settings.btnClassShowmore);
                        $(_button).show();
                    }
                } else {
                    if ($(_button).is(':visible') || event == null) {
                        $this.css({ 'height': '', 'max-height': '' });
                        $this.removeClass(hiddenclass);
                        $(_button).hide();
                    }
                }
            };

            if ($this.parent().not(wrapperclass)) {
                $this.wrap($('<div />').addClass(wrapperclass));

                var _button = $('<button />')
                    .addClass(settings.btnClassShowmore)
                    .text(settings.btnTextShowmore)
                    .on('click', function (e) {
                        e.preventDefault();
                        if ($this.hasClass(hiddenclass)) {
                            $this.css({ 'height': settings.showheight + 'px', 'max-height': '' })
                                .animate({ height: fullheight() + 'px' }, settings.animationspeed, function () {
                                    $this.css({ 'height': '' });
                                    $(_button).text(settings.btnTextShowless);
                                });
                        } else {
                            $this.animate({ 'height': settings.showheight + 'px' }, settings.animationspeed, function () {
                                $this.css({ 'max-height': settings.showheight + 'px' });
                                $(_button).text(settings.btnTextShowmore);
                            });
                        }
                        $this.toggleClass(hiddenclass);
                        $(this).toggleClass(settings.btnClassShowmore).toggleClass(settings.btnClassShowless);
                    });

                $this.after(_button);

                $(window).on('orientationchange resize', onResize);
                onResize(null);
            }
        });
        return this;
    };
}(jQuery));