/**
 * Created by Robin on 15/10/17.
 */
(function($) {
    var $window = $(window);
    var $body = $('body');

    $body.addClass('is-loading');

    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-loading');
        }, 100);
    });

    $('#more').click(function () {
        $('html, body').animate({scrollTop: $('#one').offset().top}, 1000, 'swing');
    });

})(jQuery);