"use strict";
(function(){
  angular
  .module("logic")
  .controller("initialCrtl",[
    initialCrtlFunction
  ])

  function initialCrtlFunction(){
    this.generateBoard = function(length){
      let board = []
      for (i=0;i<length;i++) {
        let row = []
        for (j=0;j< =length;j++) {
          row.push("0")
        }
        board.push(row)
      }
      return board
    }
    this.fillBoardPoisson = function(){

    }
    this.fillBoardRigged = function(){

    }
  }
}())
