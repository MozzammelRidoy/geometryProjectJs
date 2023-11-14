
//Triangle Button Event...
document.getElementById('triangle-calculate-btn').addEventListener('click', function(){

    // Call to for Base Value
    const baseValue = getElementInputValueById('triangle-base');


    //Call to for Hight Value
    const hightValue = getElementInputValueById('triangle-hight');
    
    //Call triangle Checker
     triangleChecker(baseValue, hightValue);
    
    
    
})


//Rectangle Button Event...
document.getElementById('rectangle-calculate-btn').addEventListener('click', function(){

    // Call to for Width Value
    const widthValue = getElementInputValueById('rectangle-width');


    //Call to for length Value
    const lengthValue = getElementInputValueById('rectangle-length');

    //Call Recangle Checker..
    recangleChecker(widthValue, lengthValue);
    
    
    
})



//Parallelogram Button Event...
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function(){

    // Call to for Base Value
    const baseValue = getElementInputValueById('parallelogram-base');


    //Call to for Hight Value
    const hightValue = getElementInputValueById('parallelogram-hight');


    //Call paralelogram checker
    paralelogramChecker(baseValue, hightValue);



    
})


//Rhombus Button Event...
document.getElementById('rhombus-calculate-btn').addEventListener('click', function(){

    // Call to for D one Value
    const  dOneValue = getElementInputValueById('rhombus-d-one');


    //Call to for D tow Value
    const dTowValue = getElementInputValueById('rhombus-d-tow');

    //Call Rhombus Checker
    rhombusChecker(dOneValue, dTowValue);

   
})


//Pentagon Button Event...
document.getElementById('pentagon-calculate-btn').addEventListener('click', function(){

    // Call to for Pera Value
    const peraValue = getElementInputValueById('pentagon-pera');


    //Call to for Base Value
    const baseValue = getElementInputValueById('pentagon-base');

    //call Pentagon checker
    pentagonChecker(peraValue, baseValue);

    
    
})



//Ellipse Button Event...
document.getElementById('ellipse-calculate-btn').addEventListener('click', function(){

    // Call to for Pera Value
    const areaValue = getElementInputValueById('ellipse-area');


    //Call to for Base Value
    const borderValue = getElementInputValueById('ellipse-border');

    //Call Ellipse Checker 
    ellipseChecker(areaValue, borderValue);


    
})








