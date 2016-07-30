(function () {
    'use strict';

    angular
        .module('app')
        .component('home', {
            templateUrl: 'app/components/home/home.html',
            replace: true,
            //$routeConfig: [
            //    {path: '/test', name: 'Test', component: 'test', useAsDefault: true},
            //    {path: '/test2', name: 'Test2', component: 'test2'}
            //
            //],
            controller: HomeCtrl
        });

    function HomeCtrl() {
        //TODO
    }
})();