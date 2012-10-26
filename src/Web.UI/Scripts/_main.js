(function () {
    var root = this;
    
    initialize();
    boot();
    
    function initialize() {
        require.config({ baseUrl: 'scripts/app' });
        define('jquery', [], function () { return root.jQuery; });
        define('sammy', [], function () { return root.Sammy; });
        define('ko', [], function () { return root.ko; });
        define('underscore', [], function () { return root._; });
        define('moment', [], function () { return root.moment; });
    }

    function boot() {
        require(['bootstrapper'], function (bs) { bs.run(); });
    }

})();