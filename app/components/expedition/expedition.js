(function () {
    'use strict';

    angular
        .module('app')
        .component('expedition', {
            templateUrl: 'app/components/expedition/expedition.html',
            replace: true,
            $routeConfig: [
               { path: '/expeditions', name: 'Expedition', component: 'expedition' }
            //    {path: '/test2', name: 'Test2', component: 'test2'}
            //
            ],
            controller: ExpeditionCtrl
        });

    function ExpeditionCtrl() {
        //TODO
    }
})();