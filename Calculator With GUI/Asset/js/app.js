//Assign buttons to the respective query selector
const operationInput = document.querySelectorAll('#operation');
const noInputMade = document.querySelectorAll('#num');
const actionInput = document.querySelectorAll('#action');
const oneOpInput = document.querySelectorAll('#oneOp');
const ansInput = document.querySelector('#ans');
//Operations
const opertaionInput = document.querySelector('.operations');
const expressionInput1 = document.querySelector('#number1');

const answerDisplay = document.querySelector('#displayColor');

let opchoose = false;
let numberInput = [];
let expression = '';
let answer = '';
let numexp = '';
let check = 0;
let selected = false;

if (opchoose == false){
    disableall();
}

//Event listener initialization
operationInput.forEach(function(elements){
    elements.addEventListener('click', opbtnListner);
})
noInputMade.forEach(function(elements){
    elements.addEventListener('click', nobtnListner);
})
actionInput.forEach(function(elements){
    elements.addEventListener('click', actionbtnListner);
})
oneOpInput.forEach(function(elements){
    elements.addEventListener('click', oneopbtnListner);
})
opertaionInput.addEventListener('change', operationSet);
ansInput.addEventListener('click', ansbtnListner);

//Event fuctions
function opbtnListner(e){
    if(opertaionInput.value == "add"){
        expression = expression + expressionInput1.value ;
        expression = expression + e.target.value ;

        answerDisplay.value = expression;
        numberInput.push(expressionInput1.value);
    
        expressionInput1.value = '';
        numexp ='';
    }
    else if (opertaionInput.value == "multiply" ){
        expression = expression + expressionInput1.value ;
        expression = expression + e.target.value ;

        answerDisplay.value = expression;
        numberInput.push(expressionInput1.value);
    
        expressionInput1.value = '';
        numexp ='';
    }

    else{
        if(check<1){
            expression = expression + expressionInput1.value ;
            expression = expression + e.target.value ;
    
            answerDisplay.value = expression;
            numberInput.push(expressionInput1.value);
        
            expressionInput1.value = '';
            numexp ='';

            check+=1;
        }
        else{
            disableall();
            ansInput.disabled = false;
        }
    } 
}

function nobtnListner(e){    
    numexp = numexp + e.target.value;
    expressionInput1.value = numexp;
}

function actionbtnListner(e){
    if(e.target.value == "AC"){

        expressionInput1.value = '';
        answerDisplay.value = '';
        expression = '';
        numexp = '';
        numberInput = [];
    }
    else{
        numexp = numexp.slice(0, -1);
        expressionInput1.value = expressionInput1.value.slice(0, -1);        
    }
}
function oneopbtnListner(e){
    let ans = 0;
    if(e.target.value == "%"){
        ans = (Number(expressionInput1.value))/100 ;
        answerDisplay.value = ans;
        return;
    }
}
function ansbtnListner(e){
    expression = expression + expressionInput1.value ;
    numberInput.push(expressionInput1.value);

    expressionInput1.value = expression;

    if(opertaionInput.value == "add"){
        answer = add(numberInput);
        answerDisplay.value = answer;
    }    
    else if(opertaionInput.value == "sub"){

        answer = subtract(numberInput);
        answerDisplay.value =  answer;
    }    
    else if(opertaionInput.value == "multi"){

        answer = multilpy(numberInput);
        answerDisplay.value = answer;
    }    
    if(opertaionInput.value == "divi"){

        answer = divide(numberInput);
        answerDisplay.value = answer;
    }
    numberInput = [];
    check=0;
}
//Helper functions
function disableop(item){
    operationInput.forEach(function(element){
        if(element.value == item){            
            element.disabled = false;
        }
        else{
            element.disabled = true;
        }
    })
}
function disableall(){
    operationInput.forEach(function(element){            
            element.disabled = true;      
    })
    ansInput.disabled = true;
}
function enable(){    
    operationInput.forEach(function(element){            
        element.disabled = false;  
})
noInputMade.forEach(function(element){        
    element.disabled = false;
})
actionInput.forEach(function(element){        
element.disabled = false;
})
ansInput.disabled = false;
}

// Disabling the buttons -- Only the bold ones can be touched
function operationSet(){
    let selected = opertaionInput.value;
    opchoose = true;
    enable();
    if(selected == "add"){
        disableop('+');       
    }
    else if(selected == ""){
        disableall();
    }
    else if(selected == "sub"){
        disableop('-');
    }
    if(selected == "multi"){
        disableop('*');       
    }
    if(selected == "divi"){
        disableop('/');
    }
}

//Operations to be performed.
function add(items){
    let answer = 0;
    items.forEach(function(element){
    answer = answer + Number(element);
})
return answer;
}
function subtract(items){
    let answer = Number(items[0]) - Number(items[1]);
    return answer;
}
function multilpy(items){
    let answer = 1;
    items.forEach(function(element){
    answer = answer * Number(element);
    })
    return answer;
}
function divide(items){
    if(Number(items[1]) == 0){
        return "You can not divide a number with 0!"
    }
    else{
        let answer = Number(items[0]) / Number(items[1]);
    return answer;
    }
}

