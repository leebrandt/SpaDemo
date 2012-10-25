define('vm.patient-detail',
    ['jquery', 'ko', 'presenter', 'datacontext'],
    function ($, ko, presenter, datacontext) {
        var
            viewId = '#second-page-view',
            patient = ko.observable(),
            activate = function (options) {
                patient(datacontext.getPatientById(options.id));
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patient: patient
        };
    });