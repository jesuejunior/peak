(function(){
    'use strict';

    angular
        .module('app')
        .factory('LoginService', LoginService);


    function LoginService($resource, CONST){
        return $resource(CONST.api + '/user/login', null, {
            'login' : {
                method : 'POST',
                url: CONST.api + '/user/login'
            },
            'logout' : {
                method : 'POST',
                url: CONST.api + '/user/logout'

            }
        });
    }
})();