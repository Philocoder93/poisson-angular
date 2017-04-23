"use strict";
(function(){
  angular
  .module('logic')
  .controller('correctCrtl',[
    correctCrtlFunction
  ])

  function correctCrtlFunction(){
    this.test = function(){
      console.log("testing, testing")
    }
  }
}())
