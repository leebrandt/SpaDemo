define('vm.patient-detail',
    ['jquery', 'ko', 'presenter', 'db.patients'],
    function ($, ko, presenter, db) {
        var
            viewId = '#second-page-view',
            patient = ko.observable(),
            activate = function (options) {
                patient(db.getById(options.Id));
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patient: patient
        };
    });