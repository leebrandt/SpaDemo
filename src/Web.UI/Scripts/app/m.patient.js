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
            self.isEmergency = ko.observable();
            self.checkinTime = ko.observable();
            self.checkoutTime = ko.observable();
            self.visitLength = ko.computed(function () {
                if(!self.checkinTime) {
                    throw new Error('This patient has not checked in.');
                }
                if (!self.checkoutTime) {
                    throw new Error('This patient has not checked out.');
                }
                return moment(self.checkoutTime).diff(self.checkinTime, 'seconds', true) + ' seconds';

            });
            return self;
        };


        Patient.prototype.fromJSON = function (value) {
            this.id(value.Id);
            this.name(value.Name);
            this.age(value.Age);
            this.species(value.Species);
            this.complaint(value.Complaint);
            this.isEmergency(value.IsEmergency);
            this.checkinTime(value.CheckInTime);
            this.checkoutTime(value.CheckOutTime);
            return this;
        };

        return Patient;
    });