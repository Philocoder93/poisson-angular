"use strict";
(function(){
  angular
  .module("logic")
  .controller("initialCrtl",[
    initialCrtlFunction
  ])

  function initialCrtlFunction(){
    this.test = function(){
      console.log('testing, testing 123')
    }
  }
}())
