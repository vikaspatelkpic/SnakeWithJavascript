export const SNAKE_SPEED = 1
const snakeBody =[
    {x: 11, y:11},
    {x: 11, y:11},
    {x: 11, y:11}
]

export function update(){
  for (let i = snakeBody.length -2 ; i >= 0 ; i++) {  
    snakeBody[i+1] = {...snakeBody[i]}
  }
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