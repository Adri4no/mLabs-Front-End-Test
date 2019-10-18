(function () {
    angular.module("app")
        .factory('restService', restService);

    restService.$inject = ['$resource', '$q']

    function restService($resource, $q) {
    

        var service = {
            queryGetPages: queryGetPages,
        };

        return service

        function resourceGetPages() {
            var res = $resource('https://demo2697181.mockable.io/pages', {}, {
                query: {
                    method: 'GET',
                    headers: {

                    },
                    isArray: false
                }
            })
            return res
        }

        function queryGetPages() {
            var deferred = $q.defer()
            resourceGetPages().query({},
                function (data) {
                    return deferred.resolve(data);
                    // return promiseService.success(data, deferred)
                },
                function (error) {
                    return deferred.reject(error);
                    // return promiseService.error(error, deferred)
                })
            return deferred.promise
        }


    }
})()