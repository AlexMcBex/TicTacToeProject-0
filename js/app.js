//query of all clickable boxes
const  box = document.getElementsByClassName("box")
const clickedBox = document.getElementsByClassName("clickedBox")
//true if it's the player X turn
let playerXTurn = true
// const winCombos = {
//     []
// }
//game starts or the reset button is clicked
const gameStart = () => {
    console.log("Game Started")
     //all boxes go back to normal
     for(let i=0 ; i < box.length ; i++){
        box[i].classList.add('box')}
     //turn of player X
    playerXturn = true
}
//Reset Button
const button = document.querySelector("button")
button.addEventListener('click', gameStart)
//board
const board = document.getElementById("board")

//if false the game is on
let gameFinish = false
let gameTie = false

//check for tie
const checkTie = () => {
    //array of clicked boxes.length === 9
    //if tie = true then gameOver
    if (clickedBox.length === 9){
        gameTie = true
        console.log("TIE: " , gameTie)
        gameOver()
    } else {
        playerXTurn = !playerXTurn
        console.log("Turn of X user: ", playerXTurn)
    }
    }


//check for a win, if no win chek for a tie
const checkWin = () => {
    //make array of winning combos
    // const winCombos = 
        //if array of current user clicked boxes === winning array win = true
    //if win = true gameOver
    //else check for tie(no more clickable boxes) function
    checkTie()
}

//X clicks and O clicks
let XBoxes = [ ]
let OBoxes = [ ]
//make an array of clicked boxes
// let arrClickedBox = [XBoxes  + OBoxes]

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
