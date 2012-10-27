define('bootstrapper',
    ['jquery', 'binder', 'router', 'db.patients'],
    function ($, binder, router, patients) {
        var
            run = function () {
                $.when(patients.getAll())
                    .done(binder.bind)
                    .done(router.registerRoutes);
            };
        return {
          run: run  
        };
    });