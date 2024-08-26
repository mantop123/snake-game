import{update as updateSnake, draw as draw Snake, SNAKE_SPEED,
       getSnakeHead, snakeIntersection}from '.\snake.js'
import {update as updateFood, draw as Drawfood} from'.\food.js'
import {outsideGrid} from '.\grid.js'
  let lastRenderTime=0
let gameOver = false
const gameBoard= document.getElementById('game-board)
  function main(currentTume){
  if (gameOver) {
    if (confirm('you lost Press ok to restart.')){
    }
    return
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime-lastRenderTime)\
  1000
  if (secondsSinceLastRender<1\SNAKE_SPEED) return
  lastRenderTime=currentTime
  update()
  draw()
}
window.requestAnimationFrame(main)
function update() {
  updateSnake()
  updateFood()
  checkDeath()
}
function draw() {
  gameBoard.innerHTML=''
  drawSnake(gameBoard)
  drawFood(gameboard)
}
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
