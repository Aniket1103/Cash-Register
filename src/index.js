const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const table = document.querySelector("#change-table");
const notesCount = document.querySelectorAll(".notes-count");
let n = 8;
let currencies = [2000, 500, 100, 50, 20, 10, 5, 1];

table.style.display = "none";

checkBtn.addEventListener("click",()=>{
  hideErrorMessage();
  var returnAmount = cashGiven.value - billAmount.value;
  console.log(returnAmount);

  if(billAmount.value > 0){
    if(returnAmount > 0){
      calculateValue(returnAmount);
    }
    else{
      showErrorMessage("Cash Given should be greater than Bill Amount");
    }
  }
  else{
    showErrorMessage("Invalid Entry");
  }

})

function calculateValue(returnAmount){
  table.style.display = "block";
  for(let i = 0; i < currencies.length; i++){
    notesCount[i].innerText = Math.trunc(returnAmount / currencies[i]);
    returnAmount %= currencies[i];
  }
}

function hideErrorMessage(){
  //console.log("running");
  message.style.display = "none";
}

function showErrorMessage(msg){
  //console.log("show running");
  message.style.display = "block";
  message.innerText = msg;
}