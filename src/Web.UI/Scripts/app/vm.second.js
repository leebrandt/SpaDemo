define('vm.second',
    ['jquery', 'presenter', 'dataservice'],
    function ($, presenter, dataservice) {
        var
            viewId = '#second-page-view',
            patient = ko.observable(),
            activate = function (options) {
                if(options.id)
                    patient(dataservice.getPatientById(options.id));
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patient: patient
        };
    });