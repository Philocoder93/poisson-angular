"use strict";
(function(){
  .module("logic")
  .controller("incorrectCrtl",[
    incorrectCrtlFunction
  ])

  function incorrctCrtlFunction(){
    this.test = function(){
      console.log("testing, testing")
    }
  }
}())
