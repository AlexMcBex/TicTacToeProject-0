//query of all clickable boxes
const  box = document.getElementsByClassName("box")
const clickedBox = document.getElementsByClassName("clickedBox")
const turnDisplayer = document.getElementById("turnDisplayer")

//true if it's the player X turn
let playerXTurn = true
const turnX = () => {
    playerXTurn = true
}

//if false the game is on
let gameFinish = false
let gameTie = false
//X clicks and O clicks
let XBoxes = [ ]
let OBoxes = [ ]


    // make array of winning combos
// const winCombos =  [
// ['box1' && 'box2' && 'box3'],
// ['box1', 'box5', 'box9'],
// ['box1', 'box4', 'box7'],
// ['box2', 'box5', 'box8'],
// ['box3', 'box5', 'box7'],
// ['box3', 'box6', 'box9'],
// ['box4', 'box5', 'box6'],
// ['box7', 'box8', 'box9']
// ]

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
// const displayTurn =() => {
//     if (playerXTurn === true){
//         turnDisplayer.textContent= "It is X Player's turn"
//     } else {
//         turnDisplayer.textContent = "It is O Player's turn"
//     }
// }
// displayTurn()

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
        gameOver("TIE")
    } else {
        // console.log("No tie: " , gameTie)
        playerXTurn = !playerXTurn
        console.log("Turn of X user: ", playerXTurn)
    }
    }

   
// const checkXMatches = () => {
//     for (let  i = 0 ; i < winCombos.length ; i++){
//         const checkXMatches = winCombos[i].every(value => {
//             return XBoxes.includes(value);
            
//             console.log(winCombos[i])
//           });
// }
// }
// const checkOMatches = () => {
//     for (let  i = 0 ; i < winCombos.length ; i++){
//         const checkOMatches = winCombos[i].every(value => {
//             return OBoxes.includes(value);
//           });
// }
// }

//check for a win, if no win chek for a tie
const checkWin = () => {
    if (playerXTurn && 
        (XBoxes.includes('box1') && XBoxes.includes('box2') && XBoxes.includes('box3'))||
        (XBoxes.includes('box1') && XBoxes.includes('box4') && XBoxes.includes('box7'))||
        (XBoxes.includes('box1') && XBoxes.includes('box5') && XBoxes.includes('box9'))||
        (XBoxes.includes('box2') && XBoxes.includes('box5') && XBoxes.includes('box8'))||
        (XBoxes.includes('box2') && XBoxes.includes('box5') && XBoxes.includes('box7'))||
        (XBoxes.includes('box3') && XBoxes.includes('box6') && XBoxes.includes('box9'))||
        (XBoxes.includes('box4') && XBoxes.includes('box5') && XBoxes.includes('box6'))||
        (XBoxes.includes('box7') && XBoxes.includes('box8') && XBoxes.includes('box9'))
        ) {
        console.log("X WINNER!!!!!")
        gameOver("X WINS")
    }  else if (!playerXTurn && 
        (OBoxes.includes('box1') && OBoxes.includes('box4') && OBoxes.includes('box7'))||
        (OBoxes.includes('box1') && OBoxes.includes('box5') && OBoxes.includes('box9'))||
        (OBoxes.includes('box2') && OBoxes.includes('box5') && OBoxes.includes('box8'))||
        (OBoxes.includes('box2') && OBoxes.includes('box5') && OBoxes.includes('box7'))||
        (OBoxes.includes('box3') && OBoxes.includes('box6') && OBoxes.includes('box9'))||
        (OBoxes.includes('box4') && OBoxes.includes('box5') && OBoxes.includes('box6'))||
        (OBoxes.includes('box1') && OBoxes.includes('box2') && OBoxes.includes('box3'))||
        (OBoxes.includes('box7') && OBoxes.includes('box8') && OBoxes.includes('box9'))
        ) {
        console.log("O WINNER!!!!!")
        gameOver("O WINS")
    } else {
        checkTie()
    }
}
    // const winCombos = 
        // if array of current user clicked boxes === winning array win = true
    // if win = true gameOver
    // else check for tie(no more clickable boxes) function
    // checkTie()



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






const gameOver = (key) => {
    //all boxes are unclickable
for(let i=0 ; i < box.length ; i++){
    box[i].classList.add("clickedBox")
}
if (key === "TIE"){
    window.alert("The game is a tie")
} else if (key === "X WINS") {
    window.alert("X Player Wins!") 
} else if (key === "O WINS"){
    window.alert("O Player Wins!")
} else {
    window.alert("Game Over")
}
    //check for win X
    //check for win O
    // check for tie 
        //display message accordingly
        
let gameFinish = true

console.log("GAME OVER: " , gameFinish)
}

gameStart()

// console.log(wins())
// console.log(checkXMatches)