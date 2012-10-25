define('binder',
    ['jquery', 'ko', 'vm'],
    function ($, ko, vm) {
        var
            bind = function () {
                ko.applyBindings(vm.patientList, getView(vm.patientList.viewId));
                ko.applyBindings(vm.patientDetail, getView(vm.patientDetail.viewId));
            },
            getView = function (viewId) {
                return $(viewId).get(0);
            };

        return {
            bind: bind
        };
    });