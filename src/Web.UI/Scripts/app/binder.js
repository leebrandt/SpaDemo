define('binder',
    ['jquery', 'ko', 'vm'],
    function ($, ko, vm) {
        var
            bind = function () {
                ko.applyBindings(vm.first, getView(vm.first.viewId));
                ko.applyBindings(vm.second, getView(vm.second.viewId));
            },
            getView = function (viewId) {
                return $(viewId).get(0);
            };

        return {
            bind: bind
        };
    });