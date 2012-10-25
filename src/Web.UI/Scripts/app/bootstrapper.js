define('bootstrapper',
    ['jquery', 'binder', 'router', 'dataservice'],
    function ($, binder, router, dataservice) {
        var
            run = function () {
                $.when(dataservice.primeData())
                    .done(binder.bind)
                    .done(router.registerRoutes);
            };
        return {
          run: run  
        };
    });