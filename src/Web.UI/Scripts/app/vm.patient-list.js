define('vm.patient-list',
    ['jquery', 'ko', 'm', 'presenter', 'dataservice'],
    function ($, ko, m, presenter, dataservice) {
        var
            viewId = '#first-page-view',
            patients = ko.observableArray(),
            newPatient = ko.observable(new m.Patient()),
            addPatient = function () {
                newPatient().checkinTime(new Date());
                var returnValue = dataservice.addPatient(newPatient());
                patients.push(returnValue);
                newPatient(new m.Patient());
            },
            removePatient = function (patient) {
                if(dataservice.deletePatient(patient.id())) {
                    patients.pop(patient);
                }
            },
            activate = function (options) {
                patients(dataservice.getPatients());
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patients: patients,
            newPatient: newPatient,
            addPatient: addPatient,
            removePatient: removePatient
        };
    });