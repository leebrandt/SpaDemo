﻿define('router',
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
                    route: '#/patient/:id',
                    callback: vm.patientDetail.activate
                }
            ],
            registerRoutes = function () {
                for (var i = 0; i < routes.length; i++) {
                    sammy.get(routes[i].route, routes[i].callback);
                }
                sammy.run('#/patients');
            };

        return {
            registerRoutes: registerRoutes
        };
    });