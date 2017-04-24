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
      for (let i=0;i<length;i++) {
        let row = []
        for (let j=0;j<length;j++) {
          row.push(0)
        }
        board.push(row)
      }
      return board
    }
    this.fillBoardPoisson = function(board){
      let darts = Math.floor(0.9*Math.pow(board.length,2))
      for (let i=0;i<darts;i++) {
        let x = Math.floor(board.length*Math.random())
        let y = Math.floor(board.length*Math.random())
        board[x][y] = board[x][y] + 1
      }
      return board
    }
    this.fillBoardRigged = function(board){
      let darts = Math.floor(0.9*Math.pow(board.length,2))
      for (let i=0;i<darts;i++) {
        let x = Math.floor(board.length*Math.random())
        let y = Math.floor(board.length*Math.random())
        if (board[x][y] == "0"){
          board[x][y] = board[x][y] + 1
        }
        else{
          i = i-1
        }
      }
      return board
    }
    this.greeting = function(){
      console.log("hello there")
    }

    this.greeting()

    console.log("this and that")



    this.poissonBoard = []
    this.riggedBoard = []
    this.poissonboardGenerate = function(){
      this.poissonBoard = this.fillBoardPoisson(this.generateBoard(25))
      console.log(this.poissonBoard)
      console.log("poisson is firing")
    }
    this.riggedboardGenerate = function(){
      this.riggedBoard = this.fillBoardRigged(this.generateBoard(25))
      console.log(this.riggedBoard)
      console.log("rigged is firing")
    }
    this.poissonboardGenerate()
    this.riggedboardGenerate()
  }
}())
