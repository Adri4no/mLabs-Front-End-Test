(function () {
    angular.module("app")
        .service("sessionService", sessionService);

    function sessionService($cookies) {
        var localStoreAvailable = typeof (Storage) !== "undefined";

        this.prepareToSave = function (details) {
            if (angular.isUndefined(details)) {
                details = null;
            } else if (angular.isObject(details) || angular.isArray(details) || angular.isNumber(details)) {
                details = angular.toJson(details);
            }
            return details;
        };
        this.prepareToReturn = function (data) {
            if (data === null) {
                return null;
            }
            if (data === '[object Object]') {
                return null;
            }
            if (!data.length || data === 'null') {
                return null;
            }
            if (data.charAt(0) === "{" || data.charAt(0) === "[" || angular.isNumber(data)) {
                return angular.fromJson(data);
            }
            return data;
        };
        // guarda somente na sessão atual
        this.store = function (name, details) {
            if (localStoreAvailable) {
                details = this.prepareToSave(details);
                sessionStorage.setItem(name, details);
            } else {
                $cookies.put(name, details);
            }

        };
        // guarda 'eternamente' (fica salvo no dispositivo (locaStorage)
        this.persist = function (name, details) {
            if (localStoreAvailable) {
                details = this.prepareToSave(details);
                localStorage.setItem(name, details);
            } else {
                $cookies.put(name, details);
            }
        };

        this.get = function (name) {
            var item = null;
            if (localStoreAvailable) {
                item = getItem(name);
            } else {
                item = $cookies.get(name);
            }
            return this.prepareToReturn(item);

        };

        this.destroy = function (name) {
            if (localStoreAvailable) {
                localStorage.removeItem(name);
                sessionStorage.removeItem(name);
            } else {
                $cookies.remove(name);
            }

        };

        var getItem = function (name) {
            var data = null;
            var localData = localStorage.getItem(name);
            var sessionData = sessionStorage.getItem(name);

            if (sessionData) {
                data = sessionData;
            } else if (localData) {
                data = localData;
            }
            return data;
        };
        return this;
    }
})()
