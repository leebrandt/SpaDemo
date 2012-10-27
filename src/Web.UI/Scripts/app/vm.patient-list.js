define('vm.patient-list',
    ['jquery', 'ko', 'm', 'presenter', 'db.patients'],
    function ($, ko, m, presenter, db) {
        var
            viewId = '#first-page-view',
            patients = ko.observableArray(),
            newPatient = ko.observable(new m.Patient()),
            speciesList = ko.observableArray(['Dog', 'Cat']),
            sortPatients = function () {
                console.log('sorting...');
                patients.sort(function (a, b) {
                    if (a.name() > b.name()) return 1;
                    if (a.name() < b.name()) return -1;
                    return 0;
                });
                patients.sort(function (a, b) {
                    return b.isEmergency() - a.isEmergency();
                });
                console.log(patients);
            },
            
            addPatient = function () {
                newPatient().checkinTime(new Date());
                var returnValue = db.add(newPatient());
                if (returnValue) {
                    patients.push(returnValue);
                    sortPatients();
                    newPatient(new m.Patient());
                }
            },
            removePatient = function (patient) {
                if(db.del(patient.id())) {
                    patients.remove(patient);
                }
            },
            activate = function (options) {
                patients(db.getAll());
                sortPatients();
                presenter.showView(viewId);
            };
        return {
            viewId: viewId,
            activate: activate,
            patients: patients,
            newPatient: newPatient,
            speciesList: speciesList,
            addPatient: addPatient,
            removePatient: removePatient
        };
    });