define('util', [], function () {

    var
        sortPatients = function () {
            console.log('sorting...');
            patients.sort(function(a, b) {
                if (a.name() > b.name()) return 1;
                if (a.name() < b.name()) return -1;
                return 0;
            });
            patients.sort(function(a, b) {
                return b.isEmergency() - a.isEmergency();
            });
            console.log(patients);
        };

    return {
      sortPatients: sortPatients  
    };

});