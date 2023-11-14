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

    
    //Call to result field then set Total Value
    const triangleResult = document.getElementById('triangle-result');
    const triangleArea = 0.5 * input1 * input2;
    triangleResult.innerText = triangleArea.toFixed(2);


    //Call to result field then set Total Value
    const rectangleResult = document.getElementById('rectangle-result');
    const rectangleArea = input1 * input2;
    rectangleResult.innerText = rectangleArea.toFixed(2);

    
}
