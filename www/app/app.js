angular.module('app', [
    'ui.router',
    'LocalStorageModule',
    'app.home',
    'app.view2'
])
    .config(function ($urlRouterProvider, localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('app');
        $urlRouterProvider.otherwise('/home');
    });
