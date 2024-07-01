let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-button");
let newGameBtn=document.querySelector("#new-game");
let msgContainer= document.querySelector(".msg-container")
let msg= document.querySelector("#msg");
let count=0;
let gameRunning=true;

let turn0= true;

const winPattern=[
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        count++;
        console.log(count);
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
        if(count===9 && gameRunning===true){
            showDraw();
        }

    });
});


const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};



const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
};

const resetGame= ()=>{

    count=0;
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const showWinner=(pos1val)=>{
    msg.innerText= `CONGRATULATIONS! WINNER IS '${pos1val}'.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showDraw=()=>{
    msg.innerText= `GAME IS DRAW.`;
    msgContainer.classList.remove("hide");
};

const checkWinner= ()=>{
    for(pattern of winPattern){
        
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!= "" && pos3val!= ""){
            if(pos1val === pos2val && pos2val=== pos3val && pos1val=== pos3val){
                gameRunning=false;
                showWinner(pos1val);
            }
            
        }
        
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);