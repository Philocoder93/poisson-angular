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
    this.fillBoardPoisson = function(board,darts){
      for (i=0;i<darts;i++) {
        let x = Math.floor(board.length*Math.random())
        let y = Math.floor(board.length*Math.random())
        board[x][y] = (Number(board[x][y])+1).toString
      }
      return board
    }
    this.fillBoardRigged = function(){
      for (i=0;i<darts;i++) {
        let x = Math.floor(board.length*Math.random())
        let y = Math.floor(board.length*Math.random())
        if (board[x][y] == "0"){
          board[x][y] = (Number(board[x][y])+1).toString
        }
        else{
          i = i-1
        }
      }
      return board
    }
  }
}())
