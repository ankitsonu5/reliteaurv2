(function() {

                /* matchHeight example */

                $(function() {
                    // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)

                    // get test settings
                    var byRow = $('body').hasClass('test-rows');

                    // apply matchHeight to each item container's items
                    $('.community-carousel .owl-stage-outer .owl-stage').each(function() {
                        $(this).children('.owl-item').matchHeight({
                            byRow: byRow
                        });
                    });
                    
                    // apply matchHeight to each item container's items
                    $('.threecolcarousel .owl-stage-outer .owl-stage').each(function() {
                        $(this).children('.owl-item').matchHeight({
                            byRow: byRow
                        });
                    });

                    // test property
                    $('.eightcontsec .twocolcarousel .owl-stage-outer .owl-stage').each(function() {
                        $(this).children('.owl-item').matchHeight({
                            byRow: byRow
                        });
                    });

                    // test target
                    $('.target-items').each(function() {
                        $(this).children('#website-design, #mobile-app, #seo-services').matchHeight({
                            target: $(this).find('#website-design')
                        });
                    });

                    // example of removing matchHeight
                    $('.btn-remove').click(function() {
                        $('.item').matchHeight({ 
                            remove: true 
                        });
                    });

                    // button to show hidden elements
                    $('.btn-hidden').click(function() {
                        $('body').removeClass('test-hidden');
                    });

                    // example of update callbacks (uncomment to test)
                    $.fn.matchHeight._beforeUpdate = function(event, groups) {
                        //var eventType = event ? event.type + ' event, ' : '';
                        //console.log("beforeUpdate, " + eventType + groups.length + " groups");
                    }

                    $.fn.matchHeight._afterUpdate = function(event, groups) {
                        //var eventType = event ? event.type + ' event, ' : '';
                        //console.log("afterUpdate, " + eventType + groups.length + " groups");
                    }
                });

            })();