(function () {
    'use strict';

    angular
        .module('app')
        .component('node', {
            templateUrl: 'app/components/node/node.html',
            $routeConfig: [
                {path: '/', name: 'NodeList', component: 'nodeList', useAsDefault: true},
                {path: '/:id/details', name: 'NodeDetail', component: 'nodeDetail'}

            ]
        });

})();