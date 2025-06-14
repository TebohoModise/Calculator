
var newLine = true;
var value1;
var currentOperator;
//Function to handle the digits numbers
function digitBtnPressed(button){

    if (newLine){
        document.getElementById("inputbox").value= button;  
        newLine= false;    
    }
    else{ var currentValue = document.getElementById("inputbox").value;
    document.getElementById("inputbox").value=currentValue + button;
}

}

//Function to handle the All clear button
// This function clears the input box and resets the newLine flag
function btnACPressed(){
    document.getElementById("inputbox").value = 0;
    newLine = true;
}

function oprBtnPressed(operator){
    currentOperator = operator;
    value1 = parseFloat(document.getElementById("inputbox").value);
newLine= true;
}
    //function to handle the equal button
function btnEqualPressed(){
    var value2 = parseFloat(document.getElementById("inputbox").value);
    var result;

    switch(currentOperator){
case"+":
    result = value1 + value2;
    break;
    case "-":
        result = value1 - value2;
        break;
        case "/":
            result= value1/value2;
            break;
            case"*":
            result= value1 * value2
            break;
    }
    document.getElementById("inputbox").value = result;


}
function delBtnPressed(){
   
    let inputBox = document.getElementById("inputbox");
    inputBox.value = inputBox.value.slice(0, -1);


}