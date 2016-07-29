(function () {
    'use strict';

    angular
        .module('app')
        .component('image', {
            templateUrl: 'app/components/image/image.html',
            replace: true,
            $routeConfig: [
               {path: '/image', name: 'Image', component: 'image', useAsDefault: true}
               // {path: '/image2', name: 'image2', component: 'image2'}
            
            ],
            controller: ImageCtrl
        });

    function ImageCtrl() {
        //TODO
    }
})();