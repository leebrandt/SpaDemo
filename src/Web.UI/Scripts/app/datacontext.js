define('datacontext',
    ['jquery', 'underscore', 'dataservice'],
    function ($, _, dataservice) {
    
        var
            getPatients = function () {
                console.log('getting patient list');
                return dataservice.patients;
            },
            getPatientById = function (id) {
                return _.find(dataservice.patients, function (p) {
                    return p.id() == id;
                });
            };

        return {
            getPatients: getPatients,
            getPatientById: getPatientById
        };
    });