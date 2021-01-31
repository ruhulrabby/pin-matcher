// get pin function
function getPin() {
    const random = Math.random()*10000;
    const pin = (random + "").split(".")[0];
    if (pin.length === 4) {
        return pin;
    }else {
        getPin();
    }
}


//display generated pin
function generatePin(){
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
} 


// handle calculator button
const buttonContainer = document.getElementById("digit-container");
buttonContainer.addEventListener('click',function(event){
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        // handle bcackspace
        //handle clear
        if (digit === "C") {
            const typedInput = document.getElementById("typed-pin");
            typedInput.value = " ";
        }
    } else {
        const typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit;
    }

})


//function verify pin
function verifyPin() {
    const pin = document.getElementById("pin").value;
    const typedPin = document.getElementById("typed-pin").value;
    if (pin === typedPin){   
        displayMatchResult("block", "none");
    } else{
        displayMatchResult("none", "block")
    }

}


//display match result
function displayMatchResult(correctStatus, incorrectStatus) {
    const correct = document.getElementById("correct-pin");
    correct.style.display = correctStatus;
    const incorrect = document.getElementById("incorrect-pin");
    incorrect.style.display = incorrectStatus;

}