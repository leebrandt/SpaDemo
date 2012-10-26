define('vm.patient-detail',
    ['jquery', 'ko', 'presenter', 'dataservice'],
    function ($, ko, presenter, dataservice) {
        var
            viewId = '#second-page-view',
            patient = ko.observable(),
            activate = function (options) {
                patient(dataservice.getPatientById(options.Id));
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patient: patient
        };
    });