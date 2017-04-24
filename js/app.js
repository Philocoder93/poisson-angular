"use strict";
(function(){
  angular
  .module('poisson', [
    'logic',
    'ui.router'
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config([
    "$urlRouterProvider",
    ReRouterFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state('initial', {
      url: '/initial',
      templateUrl: 'js/logic/initial.html',
      controller: 'initialCrtl',
      controllerAs: 'initialVM'
    })
    .state('correct', {
      url: '/correct',
      templateUrl: 'js/logic/correct.html',
      controller: 'correctCrtl',
      controllerAs: 'correctVM'
    })
    .state('incorrect', {
      url: '/incorrect',
      templateUrl: 'js/logic/incorrect.html',
      controller: 'incorrectCrtl',
      controllerAs: 'incorrectVM'
    })
  }

  function ReRouterFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/initial')
  }
}())
