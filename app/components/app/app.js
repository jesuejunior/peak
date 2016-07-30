(function (angular) {
    'use strict';

    angular
        .module('app', ['ngComponentRouter', 'ngResource', 'ngSanitize', 'ui.bootstrap', 'ngStorage', 'toastr'])
        .factory('HttpInterceptor', HttpInterceptor)
        .config(function ($locationProvider, $compileProvider, $httpProvider, toastrConfig) {
            $locationProvider.html5Mode(false);

            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|local|data):/);

            $httpProvider.interceptors.push('HttpInterceptor');

            angular.extend(toastrConfig, {
                autoDismiss: false,
                containerId: 'toast-container',
                maxOpened: 0,
                newestOnTop: true,
                positionClass: 'toast-top-center',
                preventDuplicates: false,
                preventOpenDuplicates: true,
                target: 'app',
                allowHtml : true,
                timeOut : 0,
                extendedTimeOut: 0,
                closeButton: true
            });

        })
        .value('$routerRootComponent', 'app')
        .component('app', {
            templateUrl: 'app/components/app/app.html',
            $routeConfig: [
                { path: '/login', name: 'Login', component: 'login'},
                { path: '/containers', name: 'Container', component: 'container' },
                { path: '/expeditions', name: 'Expedition', component: 'expedition' },
                { path: '/home', name: 'Home', component: 'home', useAsDefault: true  },
                { path: '/images/...', name: 'Image', component: 'image' },
                { path: '/networks', name: 'Network', component: 'network' },
                { path: '/nodes/...', name: 'Node', component: 'node' },
                { path: '/volumes', name: 'Volume', component: 'volume' }

            ],
            controller: AppCtrl
        });

    function AppCtrl($rootRouter, $localStorage) {
        var $ctrl = this;

        $ctrl.isLogged = !!$localStorage.loggedUser;

        this.navigate = function(){

            if(!$ctrl.isLogged){
                $rootRouter.navigate(['Login']);
            }
        };

        this.$onInit = function(){
            $ctrl.navigate();
        };

    }

    function HttpInterceptor($localStorage, $q, toastr){
        var request = function (config) {
                if (!!$localStorage.loggedUser) {
                    config.headers['Auth-Token'] = $localStorage.loggedUser.token;
                }

                config.headers['Content-Type'] = 'application/json';

                return config;
            },
            responseError = function(rejection) {

                //TODO

                toastr.clear();
                toastr.error(rejection.data, 'ERROR');

                return $q.reject(rejection);
            };


        return {
            request: request,
            responseError: responseError
        }
    }


})(window.angular);
