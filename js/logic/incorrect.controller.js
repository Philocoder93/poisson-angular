"use strict";
(function(){
  angular
  .module('logic')
  .controller('incorrectCrtl',[
    incorrectCrtlFunction
  ])

  function incorrectCrtlFunction(){
    this.test = function(){
      console.log("testing, testing")
    }
  }
}())
