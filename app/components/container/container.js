(function () {
    'use strict';

    angular
        .module('app')
        .component('container', {
            templateUrl: 'app/components/container/container.html',
            replace: true,
            $routeConfig: [
               {path: '/containers', name: 'Container', component: 'container', useAsDefault: true }
               // {path: '/test2', name: 'Test2', component: 'test2'}

            ],
            controller: ContainerCtrl
        });

    function ContainerCtrl() {
        //TODO
    }
})();