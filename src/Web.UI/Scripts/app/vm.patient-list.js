define('vm.patient-list',
    ['jquery', 'ko', 'presenter', 'dataservice'],
    function ($, ko, presenter, dataservice) {
        var
            viewId = '#first-page-view',
            patients = ko.observableArray(),
            activate = function (options) {
                patients(dataservice.patients);
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patients: patients
        };
    });