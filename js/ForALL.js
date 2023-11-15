// <------------- Input Field Call ---------->
function getElementInputValueById(inputIdName){
    
   
    const inputField = document.getElementById(inputIdName);
   
    
    const inputString = inputField.value ;
   
    const inputValueNumber = parseInt(inputString);
    inputField.value = '';
  
    return inputValueNumber;
}

// <---------- Converter Function ---------->
function getElementTextValueById(nameOfId){
    const cmTextResultField = document.getElementById(nameOfId);
    const cmTextResultString = cmTextResultField.innerText;
    const cmTextResult = parseFloat(cmTextResultString);

    const newMeterTextValue = (cmTextResult / 100 ).toFixed(3);
    cmTextResultField.innerText = newMeterTextValue;
   
    return cmTextResult;
    }


    //<------------- Inline and None -------->>

    function inlineAndNone(inline, none){
        const inlineId = document.getElementById(inline);
        const noneId = document.getElementById(none);

        inlineId.style.display = 'inline';
        noneId.style.display = 'none';

    }

// <----------- Input check and Provide Alart ---------->
//For Triagle
function triangleChecker(input1, input2){
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
    backgroundColorChanger('triangle-result-bg');

}

//For Ractangle
function recangleChecker(input1, input2){
    if(isNaN(input1) || isNaN(input2)){
        alert("Please Enter a Just Valid Number");
        return;
    }
    else if(input1<0 || input2<0){
        alert('Please Enter a Positive Number');
        return;
    }

    //Call to result field then set Total Value
    const rectangleResult = document.getElementById('rectangle-result');
    const rectangleArea = input1 * input2;
    rectangleResult.innerText = rectangleArea.toFixed(2);
    backgroundColorChanger('rectangle-result-bg');

}

// For paralelogram 
function paralelogramChecker(input1, input2){
    if(isNaN(input1) || isNaN(input2)){
        alert("Please Enter a Just Valid Number");
        return;
    }
    else if(input1<0 || input2<0){
        alert('Please Enter a Positive Number');
        return;
    }

    //Call to result field then set Total Value
    const parallelogramResult = document.getElementById('parallelogram-result');
    const parallelogramArea = input1 * input2;
    parallelogramResult.innerText = parallelogramArea.toFixed(2);
    backgroundColorChanger('parallelogram-result-bg');


}

//for Rhombus
function rhombusChecker(input1, input2){
    if(isNaN(input1) || isNaN(input2)){
        alert("Please Enter a Just Valid Number");
        return;
    }
    else if(input1<0 || input2<0){
        alert('Please Enter a Positive Number');
        return;
    }

     //Call to result field then set Total Value
     const rhombusResult = document.getElementById('rhombus-result');
     const rhombusArea = 0.5 * input1 * input2;
     rhombusResult.innerText = rhombusArea.toFixed(2);
    backgroundColorChanger('rhombus-result-bg');

}

//for Pentagon
function pentagonChecker(input1, input2){
    if(isNaN(input1) || isNaN(input2)){
        alert("Please Enter a Just Valid Number");
        return;
    }
    else if(input1<0 || input2<0){
        alert('Please Enter a Positive Number');
        return;
    }

   //Call to result field then set Total Value
   const pentagonResult = document.getElementById('pentagon-result');
   const pentagonArea = 0.5 * input1 * input2;
   pentagonResult.innerText = pentagonArea.toFixed(2);
   backgroundColorChanger('pentagon-result-bg');

}


//for Ellips
function ellipseChecker(input1, input2){
    if(isNaN(input1) || isNaN(input2)){
        alert("Please Enter a Just Valid Number");
        return;
    }
    else if(input1<0 || input2<0){
        alert('Please Enter a Positive Number');
        return;
    }

   //Call to result field then set Total Value
   const ellipseResult = document.getElementById('ellipse-result');
   const ellipseArea = 3.1416 * input1 * input2;
   ellipseResult.innerText = ellipseArea.toFixed(2);
   backgroundColorChanger('ellipse-result-bg');

}



// For Background Color Changer.
function backgroundColorChanger(divIDforColor){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const colorChangingDiv = document.getElementById(divIDforColor);

    colorChangingDiv.style.backgroundColor = '#' + randomColor;
}

