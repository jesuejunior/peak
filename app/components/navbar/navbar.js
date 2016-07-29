(function () {
    'use strict';

    angular
        .module('app')
        .component('navbar', {
            templateUrl: 'app/components/navbar/navbar.html',
            replace: true,
            require:{
                appCtrl : '^app'
            },
            controller: NavCtrl
        });

    function NavCtrl($rootRouter, $localStorage) {
        var $ctrl = this;

        $ctrl.user = $localStorage.loggedUser || {};
        $ctrl.user.name = 'Username';
        $ctrl.user.logoUrl = '/auth/logout';

        document.getElementById('toggle').addEventListener('click', function (e) {
            document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
            document.getElementById('toggle').classList.toggle('x');
        });

        $ctrl.logout = function(){

            //new LoginService().$logout().then(function(){
                $ctrl.appCtrl.isLogged = false;
                delete $localStorage.loggedUser;
                $rootRouter.navigate(['Login']);
            //});
        };

        $ctrl.$onInit = function(){

           //TODO : get logged user info
        }
    }
})();