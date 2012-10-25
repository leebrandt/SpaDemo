define('dataservice',
    ['jquery', 'vm', 'm'],
    function($, vm, m) {

        var
            getPatientList = function () {
                $.getJSON('/api/patient', null,
                    function (data) {
                        var patients = [];
                        $.each(data, function (index, value) {
                            var p = new m.Patient();
                            p.id(value.Id);
                            p.name(value.Name);
                            patients.push(p);
                        });
                        vm.patientList.patients(patients);
                    });
            };

        return {
            getPatientList: getPatientList
        };

    });