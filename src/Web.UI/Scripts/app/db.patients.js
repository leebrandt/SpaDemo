define('db.patients',
    ['jquery','underscore', 'm', 'dataservice'],
    function ($, _, m, dataservice) {
        
        var
            patients = [],
            resourceUrl = '/api/patient',
            ensurePatientsAreLoaded = function () {
                if (!patients || patients.length == 0) {
                    dataservice.get(resourceUrl, { success: loadList, error: showError });
                }
            },
            loadList = function (data) {
                $.each(data, function (index, value) {
                    patients.push(new m.Patient().fromJSON(value));
                });
            },
            showError = function (e) {
                var response = $.parseJSON(e.responseText);
                alert(response);
                return false;
            },
 
            // public stuff
            getAll = function () {
                ensurePatientsAreLoaded();
                return patients;
            },
            getById = function (id) {
                ensurePatientsAreLoaded();
                return _.find(patients, function (p) {
                    return p.id() == id;
                });
            },
            add = function (patient) {
                dataservice.add(resourceUrl, patient,
                    {
                        success: function (data) {
                            alert('Successfully checked in patient.');
                            patient.id(data.Id);
                        },
                        error: showError
                    });
                return patient;
            },
            del = function (id) {
                dataservice.del(resourceUrl + '/' + id,
                    {
                        success: function (data) { alert('successfully removed patient.'); },
                        error: showError
                    });
                return true;
            };

        return {
            getAll: getAll,
            getById: getById,
            add: add,
            del: del
        };

    });