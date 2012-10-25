define('vm.patient-detail',
    ['jquery', 'ko', 'presenter'],
    function ($, ko, presenter) {
        var
            viewId = '#second-page-view',
            patient = ko.observable(),
            activate = function (options) {
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patient: patient
        };
    });