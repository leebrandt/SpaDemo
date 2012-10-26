define('dataservice',
    ['jquery', 'ko', 'm'],
    function($, ko, m) {

        var
            patients = [],
            primeData = function () {
                $.ajax({
                    url: '/api/patient',
                    type: 'GET',
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        $.each(data, function (index, value) {
                            var p = new m.Patient();
                            p.id(value.Id);
                            p.name(value.Name);
                            p.age(value.Age);
                            p.species(value.Species);
                            p.complaint(value.Complaint);
                            p.checkinTime(value.CheckInTime);
                            p.checkoutTime(value.CheckOutTime);
                            patients.push(p);
                        });
                    }
                });
            },
            getPatients = function () {
                return patients;
            },
            getPatientById = function (id) {
                return _.find(patients, function (p) {
                    return p.id() == id;
                });
            },
            addPatient = function (patient) {
                $.ajax({
                    url: '/api/patient',
                    type: 'POST',
                    contentType: "application/json; charset=utf-8",
                    data: ko.toJSON(patient),
                    success: function (data) {
                        console.log(data);
                        patient.id(data.Id);
                    },
                    error: function (jqXHR, status, exception) {
                        var response = $.parseJSON(jqXHR.responseText);
                        alert(response);
                        return false;
                    }
                });
                return patient;
            },
            deletePatient = function (id) {
                $.ajax({
                    url: '/api/patient/' + id,
                    type: 'DELETE',
                    success: function () {
                        alert('removed patient');
                    },
                    error: function (jqXHR, status, exception) {
                        var response = $.parseJSON(jqXHR.responseText);
                        alert(response.Message);
                        return false;
                    }
                });
                return true;
            };
        
        return {
            primeData: primeData,
            getPatients: getPatients,
            getPatientById: getPatientById,
            addPatient: addPatient,
            deletePatient: deletePatient
        };

    });