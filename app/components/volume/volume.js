(function () {
    'use strict';

    angular
        .module('app')
        .component('volume', {
            templateUrl: 'app/components/volume/volume.html',
            replace: true,
            $routeConfig: [
               {path: '/volumes', name: 'Volume', component: 'volume', useAsDefault: true},
               // {path: '/volume2', name: 'volume2', component: 'volume2'}

            ],
            controller: VolumeCtrl
        });

    function VolumeCtrl() {
        //TODO
    }
})();