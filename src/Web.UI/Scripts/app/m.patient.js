define('m.patient',
    ['ko', 'moment'],
    function(ko, moment) {
        var Patient = function () {
            var self = this;
            self.id = ko.observable();
            self.name = ko.observable();
            self.age = ko.observable();
            self.species = ko.observable();
            self.complaint = ko.observable();
            self.checkinTime = ko.observable();
            self.checkoutTime = ko.observable();
            self.visitLength = ko.computed(function () {
                if(!self.checkinTime) {
                    throw new Error('This patient has not checked in.');
                }
                if (!self.checkoutTime) {
                    throw new Error('This patient has not checked out.');
                }
                return moment(self.checkoutTime).subtract(self.checkinTime).format('h:mm:ss');

            });
            return self;
        };
        

        return Patient;
    });