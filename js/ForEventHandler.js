
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
document.getElementById('ellipes-calculate-btn').addEventListener('click', function(){

    // Call to for Pera Value
    const areaValue = getElementInputValueById('ellipse-area');


    //Call to for Base Value
    const borderValue = getElementInputValueById('ellipse-border');

    //Call Ellipse Checker 
    ellipseChecker(areaValue, borderValue);


    
})

// Converter Centemeter to Meter 

            //For Triangle 
document.getElementById('triangle-cm-m').addEventListener('click', function(){
    const triangleResult = getElementTextValueById('triangle-result');

    inlineAndNone('triangle-m-none', 'triangle-cm-inline');
    
})
            //For Rectangle 
document.getElementById('rectangle-cm-m').addEventListener('click', function(){
    const rectangleResult = getElementTextValueById('rectangle-result');

    inlineAndNone('rectangle-m-none', 'rectangle-cm-inline');

})
            //For Paralelogram 
document.getElementById('parallelogram-cm-m').addEventListener('click', function(){
    const parallelogramResult = getElementTextValueById('parallelogram-result');

    inlineAndNone('parallelogram-m-none', 'parallelogram-cm-inline');

})
            //For Rhombus 
document.getElementById('rhombus-cm-m').addEventListener('click', function(){
    const rhombusResult = getElementTextValueById('rhombus-result');

    inlineAndNone('rhombus-m-none', 'rhombus-cm-inline');

})
            //For Pentagon 
document.getElementById('pentagon-cm-m').addEventListener('click', function(){
    const pentagonResult = getElementTextValueById('pentagon-result');

    inlineAndNone('pentagon-m-none', 'pentagon-cm-inline');

})
            //For ellipes 
document.getElementById('ellipse-cm-m').addEventListener('click', function(){
    const ellipesResult = getElementTextValueById('ellipse-result');

    inlineAndNone('ellipse-m-none', 'ellipse-cm-inline');

})

//Backgrund color Changing.

document.getElementById('triangle-box-bg').addEventListener('mousemove', function(){
    backgroundColorChanger('triangle-box-bg');
})

document.getElementById('rectangle-box-bg').addEventListener('mousemove', function(){
    backgroundColorChanger('rectangle-box-bg');
})

document.getElementById('parallelogram-box-bg').addEventListener('mousemove', function(){
    backgroundColorChanger('parallelogram-box-bg');
})

document.getElementById('rhombus-box-bg').addEventListener('mousemove', function(){
    backgroundColorChanger('rhombus-box-bg');
})

document.getElementById('pentagon-box-bg').addEventListener('mousemove', function(){
    backgroundColorChanger('pentagon-box-bg');
})

document.getElementById('ellipse-box-bg').addEventListener('mousemove', function(){
    backgroundColorChanger('ellipse-box-bg');
})








