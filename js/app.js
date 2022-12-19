//query of all clickable boxes
const  box = document.getElementsByClassName("box")
const clickedBox = document.getElementsByClassName("clickedBox")

//if false the game is on
let gameFinish = false
let gameTie = false
//X clicks and O clicks
let XBoxes = [ ]
let OBoxes = [ ]

//true if it's the player X turn
let playerXTurn = true
const turnX = () => {
    playerXTurn = true
}

//     // make array of winning combos
const winCombo1 =  ['box1', 'box2', 'box3']
const winCombo2 =  ['box1', 'box5', 'box9']
const winCombo3 =  ['box1', 'box4', 'box7']
const winCombo4 =  ['box2', 'box5', 'box8']
const winCombo5 =  ['box3', 'box5', 'box7']
const winCombo6 =  ['box3', 'box6', 'box9']
const winCombo7 =  ['box4', 'box5', 'box6']
const winCombo8 =  ['box7', 'box8', 'box9']
// const winCombos = winCombo1 + winCombo2
console.log("Win Combo n1: " , winCombo1)

const emptyArrays = () =>{
  XBoxes = []
  OBoxes = []
}
//game starts or the reset button is clicked
const gameStart = () => {
     //turn of player X
     let playerXturn = true
     //all boxes go back to normal
     for(let i=0 ; i < box.length ; i++){
        box[i].classList.add('box')
        box[i].textContent= "" 
        box[i].classList.remove("clickedBox")   
    }
    turnX()
    emptyArrays()
    console.clear()
    let gameFinish = false
    let gameTie = false
    
    console.log("Game Started")
    // empty clicked boxes arrays
}

//Reset Button
const button = document.querySelector("button")
button.addEventListener('click', gameStart)
//board
const board = document.getElementById("board")


//check for tie
const checkTie = () => {
    //array of clicked boxes.length === 9
    //if tie = true then gameOver
    if (clickedBox.length === 9){
        gameTie = true
        console.log("TIE: " , gameTie)
        gameOver()
    } else {
        console.log("No tie: " , gameTie)
        playerXTurn = !playerXTurn
        console.log("Turn of X user: ", playerXTurn)
    }
    }


//check for a win, if no win chek for a tie
const checkWin = () => {
    
    if (XBoxes === winCombo1) {
        console.log("WINNER!!!!!")
    } else {checkTie()}
    // const winCombos = 
        //if array of current user clicked boxes === winning array win = true
    //if win = true gameOver
    //else check for tie(no more clickable boxes) function
    // checkTie()
}


//When somebody clicks on a block
const clickBox = (e ) => {
    if (!gameFinish) {
if (playerXTurn) {
    //X turn
    //box gets clicked
    //textContent div
        e.target.textContent= "X"
        let classBox = e.target.classList
        // classBox.remove("box")
        classBox.add("clickedBox")
    // adds the id of the clicked box in the x or O array
        let idBox = e.target.id
        XBoxes.push(idBox)
        console.log("boxes clicked by X: " , XBoxes)
        // XBoxes.add
//check for a win () function, add XO parameter?
// console.log("X turn")
checkWin()
} else  {
    //O Turn    
    //box gets clicked
    //textContent div
        e.target.textContent= "O"
        const classBox = e.target.classList
        // classBox.remove("box")
        classBox.add("clickedBox")
        // adds the id of the clicked box in the x or O array
            let idBox = e.target.id
            OBoxes.push(idBox)
            console.log("boxes clicked by O: " , OBoxes)
        // XBoxes.add
//check for a win () function, add XO parameter?
// console.log("X turn")
checkWin()
}
} else {
    console.log("the box is unclickable")
}
}



//a box gets clicked
for(let i=0 ; i < box.length ; i++){
    box[i].addEventListener('click', clickBox)
    // box[i].addEventListener('click', function con(){
    //     console.log("you clicked on:" , box[i].id)})
}






const gameOver = () => {
    //all boxes are unclickable
for(let i=0 ; i < box.length ; i++){
    box[i].classList.add("clickedBox")
}
    //check for win X
    //check for win O
    // check for tie 
        //display message accordingly
        
let gameFinish = true

console.log("GAME OVER: " , gameFinish)
}

gameStart()
