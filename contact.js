/* form validation */

//get data
const form = document.getElementById('my-form');
const nameInput = document.querySelector("#form-name");
const userEmail = document.querySelector("#form-email");
const userMessage = document.querySelector("#form-message");
const phone = document.querySelector("#phone-number");
const errorNodes = document.querySelectorAll(".error");
// validate data
function validateForm(){
    clearMessages();
    let errorFlag = false;
    let nam = nameInput.value.toLowerCase()
    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(userEmail.value)){
        errorNodes[1].innerText = "Invalid email address";
        userEmail.classList.add("error-border");
        errorFlag = true;
    }

    if(userMessage.value.length < 1) {
        errorNodes[2].innerText = "Please enter a message"
        userMessage.classList.add("error-border")
        errorFlag = true;
    }

    if(nam == "henrynes"){
       window.location.replace('thanks.html');
    }
    
    if(!errorFlag && nam !== 'henrynes'){
        form.submit();
    }

}

//clear error / success messages 

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    userEmail.classList.remove("error-border");
    userMessage.classList.remove("error-border");
}

//check if email is valid
function emailIsValid(userEmail){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(userEmail);
}