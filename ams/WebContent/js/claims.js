/**
 * 
 */
(function($) {
    "use strict";

    /*
     * GUS Modifications to capture the username
     */
    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }


    $('img.xyz').hover(sourceSwap, sourceSwap);


})(jQuery);