import { getInputDirection } from "./input.js "

export const SNAKE_SPEED = 1
const snakeBody =[{x: 11, y:11},]
let newSegments =0

export function update(){
  addSegments()

  const inputDirection = getInputDirection()
  for (let i = snakeBody.length -2 ; i >= 0 ; i++) {  
    snakeBody[i+1] = {...snakeBody[i]}
  }
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
      const snakeElement = document.createElement('div')
      snakeElement.style.gridRowStart = segment.x
      snakeElement.style.gridColumnStart = segment.y
      snakeElement.classList.add('snake')
      gameBoard.appendChild(snakeElement)
      // console.log("dreaw snake")
    })
    
}
export function expandSnake(amount){
  newSegments += amount
}
export function onsnake(position ,{ignorHead =false}={}){
  return snakeBody .some((segment,index) =>{
    if(ignorHead&& index===0) return false
 return equalPositions(segment,position)
  })
}

export function getsnakeHead(){
     return snakeBody[0]
}
export function snakeIntersecton(){
  return (snakeBody[0],{ignorHead:true})
}

function equalPosition(pos1,pos2){
  return pos1.x===pos2.x && pos1.y===pos2.y
  
  
}

function addSegments(){
  for (let i=0;i<newSegments;i++){
    snakeBody.push({...snakeBody[snakeBody.length -1]})
  }
  newSegments =0
}