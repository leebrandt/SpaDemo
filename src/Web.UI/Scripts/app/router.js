define('router',
    ['jquery', 'sammy', 'vm'],
    function ($, _sammy, vm) {
        var
            sammy = new _sammy(),
            routes = [
                {
                    route: '#/patients',
                    callback: vm.patientList.activate
                },
                {
                    route: '#/patient/:Id',
                    callback: vm.patientDetail.activate
                }
            ],
            registerRoutes = function () {
                for (var i = 0; i < routes.length; i++) {
                    registerRoute(routes[i]);
                }
                sammy.run('#/patients');
            },
            registerRoute = function (route) {
                sammy.get(route.route, function (context) {
                    route.callback(context.params);
                });
            };

        return {
            registerRoutes: registerRoutes
        };
    });