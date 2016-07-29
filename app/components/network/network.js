(function () {
    'use strict';

    angular
        .module('app')
        .component('network', {
            templateUrl: 'app/components/network/network.html',
            replace: true,
            $routeConfig: [
               {path: '/network', name: 'Network', component: 'network', useAsDefault: true},
               // {path: '/test2', name: 'Test2', component: 'test2'}

            ],
            controller: NetworkCtrl
        });

    function NetworkCtrl() {
        //TODO
    }
})();