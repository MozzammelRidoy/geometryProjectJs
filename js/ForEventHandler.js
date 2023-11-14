
//Triangle Button Event...
document.getElementById('triangle-calculate-btn').addEventListener('click', function(){

    // Call to for Base Value
    const baseValue = getElementInputValueById('triangle-base');


    //Call to for Hight Value
    const hightValue = getElementInputValueById('triangle-hight');

    

    
    validInputCheck(baseValue, hightValue);
    //Call to result field then set Total Value
    const triangleResult = document.getElementById('triangle-result');
    const triangleArea = 0.5 * baseValue * hightValue;
    triangleResult.innerText = triangleArea.toFixed(2);
    
    
})


//Rectangle Button Event...
document.getElementById('rectangle-calculate-btn').addEventListener('click', function(){

    // Call to for Width Value
    const widthValue = getElementInputValueById('rectangle-width');


    //Call to for length Value
    const lengthValue = getElementInputValueById('rectangle-length');


    validInputCheck(widthValue, lengthValue);
    
    //Call to result field then set Total Value
    const rectangleResult = document.getElementById('rectangle-result');
    const rectangleArea = widthValue * lengthValue;
    rectangleResult.innerText = rectangleArea.toFixed(2);
    
})



//Parallelogram Button Event...
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function(){

    // Call to for Base Value
    const baseValue = getElementInputValueById('parallelogram-base');


    //Call to for Hight Value
    const hightValue = getElementInputValueById('parallelogram-hight');


    //Call to result field then set Total Value
    const parallelogramResult = document.getElementById('parallelogram-result');
    const parallelogramArea = baseValue * hightValue;
    parallelogramResult.innerText = parallelogramArea.toFixed(2);
})


//Rhombus Button Event...
document.getElementById('rhombus-calculate-btn').addEventListener('click', function(){

    // Call to for D one Value
    const  dOneValue = getElementInputValueById('rhombus-d-one');


    //Call to for D tow Value
    const dTowValue = getElementInputValueById('rhombus-d-tow');

    //Call to result field then set Total Value
    const rhombusResult = document.getElementById('rhombus-result');
    const rhombusArea = 0.5 * dOneValue * dTowValue;
    rhombusResult.innerText = rhombusArea.toFixed(2);
})


//Pentagon Button Event...
document.getElementById('pentagon-calculate-btn').addEventListener('click', function(){

    // Call to for Pera Value
    const peraValue = getElementInputValueById('pentagon-pera');


    //Call to for Base Value
    const baseValue = getElementInputValueById('pentagon-base');

    
    //Call to result field then set Total Value
    const pentagonResult = document.getElementById('pentagon-result');
    const pentagonArea = 0.5 * peraValue * baseValue;
    pentagonResult.innerText = pentagonArea.toFixed(2);
})



//Ellipse Button Event...
document.getElementById('ellipse-calculate-btn').addEventListener('click', function(){

    // Call to for Pera Value
    const areaValue = getElementInputValueById('ellipse-area');


    //Call to for Base Value
    const borderValue = getElementInputValueById('ellipse-border');


    //Call to result field then set Total Value
    const ellipseResult = document.getElementById('ellipse-result');
    const ellipseArea = 3.1416 * areaValue * borderValue;
    ellipseResult.innerText = ellipseArea.toFixed(2);
})








