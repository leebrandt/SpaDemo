define('dataservice',
    ['jquery', 'ko', 'm'],
    function($, ko, m) {

        var
            get = function (resourceUrl, callbacks) {
                $.ajax({
                    url: resourceUrl,
                    type: 'GET',
                    dataType: 'json',
                    async: false,
                    success: callbacks.success,
                    error: callbacks.error
                });
            },
            add = function (resourceUrl, data, callbacks) {
                $.ajax({
                    url: resourceUrl,
                    type: 'POST',
                    contentType: "application/json; charset=utf-8",
                    data: ko.toJSON(data),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },
            del = function (resourceUrl, callbacks) {
                $.ajax({
                    url: resourceUrl,
                    type: 'DELETE',
                    success: callbacks.success,
                    error: callbacks.error
                });
                return true;
            };

        
        return {
            get: get,
            add: add,
            del: del
        };

    });