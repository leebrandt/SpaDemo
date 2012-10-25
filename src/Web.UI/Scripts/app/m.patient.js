define('m.patient',
    ['ko'],
    function(ko) {
        var Patient = function () {
            var self = this;
            self.id = ko.observable();
            self.name = ko.observable();
            return self;
        };

        return Patient;
    });