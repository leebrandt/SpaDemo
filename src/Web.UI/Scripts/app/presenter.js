define('presenter', ['jquery'], function ($) {
    var
        showView = function (viewId) {
            $('.view').hide();
            $(viewId).show();
        };

    return {
        showView: showView
    };
});