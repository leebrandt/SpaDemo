define('vm.first',
    ['jquery', 'ko', 'presenter'],
    function ($, ko, presenter) {
        var
            viewId = '#first-page-view',
            patients = ko.observableArray(),
            activate = function (options) {
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patients: patients
        };
    });