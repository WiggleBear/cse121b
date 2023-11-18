/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    const addNumber1 = Number(document.querySelector('#add1').value);
    const addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value =add(addNumber1,addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1,number2) {
    return number1 - number2;
}
const subtractNumbers =function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = function (number1,number2){
    return number1 * number2;
}
const multiplyNumbers = function(){
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1,multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = function (number1,number2){
    return number1 / number2;
}
const divideNumbers = function(){
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1,divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);


/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function () {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;
    let discount = 0;
    if (isMember) {
        discount = 0.2;
    }
    const totalDue = subtotal - (subtotal * discount);
    document.getElementById('total').textContent = `$ ${totalDue.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = Array.from({length:13},(_,i)=> i+1);
document.querySelector('#array').innerHTML = numbersArray.join(',');
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 == 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2)
    .reduce((multiplied, number) => multiplied + number);
