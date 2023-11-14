function getElementInputValueById(inputIdName){
    
   
    const inputField = document.getElementById(inputIdName);
   
    
    const inputString = inputField.value ;
   
    const inputValueNumber = parseInt(inputString);
    inputField.value = '';
  
    return inputValueNumber;
}


function validInputCheck(input1, input2){
    if(isNaN(input1) || isNaN(input2)){
        alert("Please Enter a Just Valid Number");
        return;
    }
    else if(input1<0 || input2<0){
        alert('Please Enter a Positive Number');
        return;
    }

    
    


}
