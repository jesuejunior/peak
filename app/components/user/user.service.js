(function(){
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);


    function UserService($resource, CONST){
        return $resource(CONST.api + '/user', null, {
            'self' : {
                method : 'GET',
                url : CONST.api + '/user/me'
            }
        });
    }

})();