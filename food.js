import {onSnake,expandsnake, onsnake} from './snake.js'
import { randomGridPosition} from '/grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE =1


export function update(){
   if (onsnake(food))
   expandsnake(EXPANSION_RATE)
   food = getRandomFoodPosition()

  }
  
  export function draw(gameBoard){
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.x
        foodElement.style.gridColumnStart = food.y
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
        // console.log("dreaw snake")
      }
      function getRandomFoodPosition(){
          let newFoodPosition
          while (newFoodPosition == null || onsnake(newfoodPosition)){
              newFoodPosition = randomGridPosition()
          }
          return newFoodPosition
      }
      
  