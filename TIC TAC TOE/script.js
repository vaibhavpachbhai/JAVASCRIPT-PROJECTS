let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msgPara = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPartterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
   box.addEventListener("click", () => {
    if (turnO) {
        box.innerText = "O";
        turnO = false;
    } else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
   });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPartterns) {
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText;         
        let pos3Val = boxes[pattern[2]].innerText;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

const newGame = () => {
   turnO = true;
   count = 0;
   enableBoxes();
   msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",newGame);