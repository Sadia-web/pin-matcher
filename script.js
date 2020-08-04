//generate pin Area

const pinBtn = document.getElementById("pinBtn");
pinBtn.addEventListener("click", function(){
    const newPin = Math.floor(Math.random() * (2000 - 1001) + 1001);
    document.getElementById("pinInput").value = newPin;
    successPart.style.display = "none";
});
document.getElementById("pinInput").value = "";


//Bonus Area

let submitClear = document.getElementById("submitInput");
function showValue(data){
    switch(data){
        case "c":
            submitInput.value = "";
            break;
        case "<":
            submitInput.value = submitInput.value.substr(0, submitInput.value.length - 1);
            break;
        default:
            submitInput.value += data;
            break;
    }
}
document.getElementById("submitInput").value = "";

//Submit Button

const submitBtn = document.getElementById("apply");
submitBtn.addEventListener("click", function(){
    let generatePin = document.getElementById("pinInput").value;
    let newSubmit = document.getElementById("submitInput").value;
    if(newSubmit === generatePin){
        let successPart = document.getElementById("success");
        successPart.style.display = "block";
        let failPart = document.getElementById("fail");
        failPart.style.display = "none";
        document.getElementById("submitInput").value = "";
        document.getElementById("pinInput").value = "";
    }
    else{
        let failPart = document.getElementById("fail");
        failPart.style.display = "block";
        let successPart = document.getElementById("success");
        successPart.style.display = "none";
        document.getElementById("submitInput").value = "";
        document.getElementById("pinInput").value = "";
    }
});
