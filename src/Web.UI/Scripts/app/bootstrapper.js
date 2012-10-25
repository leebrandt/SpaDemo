define('bootstrapper',
    ['jquery', 'binder', 'router', 'dataservice'],
    function ($, binder, router, dataservice) {
        var
            run = function () {
                $.when(dataservice.getPatientList())
                    .done(binder.bind)
                    .done(router.registerRoutes);
            };
        return {
          run: run  
        };
    });