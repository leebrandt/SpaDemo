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
                        vm.first.patients(patients);
                    });
            },
            getPatientById = function (id) {
                $.getJSON('/api/patient/' + id, null,
                    function (data) {
                        var p = new m.Patient();
                        p.id(data.Id);
                        p.name(data.Name);
                        return p;
                    });
            };

        return {
            getPatientList: getPatientList,
            getPatientById: getPatientById
        };

    });