const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".No-of-notes");
const availableNotes = [2000,500,200,100,50,20,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    show();
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value){

            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned)
        }else{
            showMessage("The cash provided should atleast be equal to bill amount");
        }
    }
    else{
        
        showMessage("Invalid Bill Amount");
    }
});

 function calculateChange(amountToBeReturned){

        for(let i=0 ; i< availableNotes.length; i++){

            const numberOfNotes = Math.trunc(amountToBeReturned/ availableNotes[i]);
            amountToBeReturned %= availableNotes[i];
            noOfNotes[i].innerText = numberOfNotes;
        }
 }
function showMessage(msg){

    message.style.display = "block";
    message.innerText = msg;
}

function show(){

    message.style.display="none";
}
