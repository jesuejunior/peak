(function () {
    'use strict';

    angular
        .module('app')
        .component('node', {
            templateUrl: 'app/components/node/node.html',
            replace: true,
            $routeConfig: [
               {path: '/node', name: 'Node', component: 'node', useAsDefault: true},
               // {path: '/test2', name: 'Test2', component: 'test2'}

            ],
            controller: NodeCtrl
        });

    function NodeCtrl() {
        //TODO
    }
})();