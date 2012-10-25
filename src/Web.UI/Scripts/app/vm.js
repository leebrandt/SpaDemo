define('vm',
    ['vm.patient-list', 'vm.patient-detail'],
    function (patientList, patientDetail) {
        return {
            patientList: patientList,
            patientDetail: patientDetail
        };
});