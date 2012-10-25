define('vm',
    ['vm.first', 'vm.second'],
    function (first, second) {
        return {
            first: first,
            second: second
        };
});