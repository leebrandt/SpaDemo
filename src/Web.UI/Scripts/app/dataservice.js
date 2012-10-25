define('dataservice',
    ['jquery', 'm'],
    function($, m) {

        var
            patients = [],
            primeData = function () {
                $.ajax({
                    url: '/api/patient',
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        $.each(data, function (index, value) {
                            var p = new m.Patient();
                            p.id(value.Id);
                            p.name(value.Name);
                            patients.push(p);
                        });
                    }
                });
            };
        
        return {
            primeData: primeData,
            patients: patients
        };

    });