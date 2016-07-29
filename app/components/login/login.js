(function () {
    'use strict';

    angular
        .module('app')
        .component('login', {
            templateUrl: 'app/components/login/login.html',
            replace: true,
            require: {
                appCtrl : '^app'
            },
            $routeConfig: [
                {path: '/login', name: 'Login', component: 'login'},

            ],
            controller: LoginCtrl
        });

    function LoginCtrl($localStorage, $rootRouter) {
        var $ctrl = this;

        this.submitLogin = function(){

            $localStorage.loggedUser = {
                token :'Auth-Token',
                login : 'Login'
            };

            $ctrl.appCtrl.isLogged = !!$localStorage.loggedUser;
            $rootRouter.navigate(['Base']);

            //var login = new LoginService({
            //    login: $ctrl.login,
            //    password: $ctrl.pass
            //});

            //login.$login().then(function(res){
            //
            //    $localStorage.loggedUser = {
            //        token : res['Auth-Token'],
            //        login : res['Login']
            //    };
            //
            //    $ctrl.appCtrl.isLogged = !!$localStorage.loggedUser;
            //    $ctrl.appCtrl.navigate();
            //
            //}).catch(function(err){
            //    console.log(err);
            //});
        };


        this.$routerCanDeactivate = function(){
            return  $ctrl.appCtrl.isLogged ;
        }
    }
})();