(function () {
    'use strict';

    angular
        .module('app')
        .component('image', {
            templateUrl: 'app/components/image/image.html',
            $routeConfig: [
                {path: '/', name: 'Image', component: 'image', useAsDefault: true},
                // {path: '/test2', name: 'Test2', component: 'test2'}

            ],
            controller: ImageCtrl
        });

    function ImageCtrl() {
        //TODO
    }
})();