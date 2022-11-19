console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('running helloName:', name,);
  return 'Hello, ' + name + '!';
}

console.log('Test - Should say Hello, Adam!:', helloName('Adam'));
console.log('Test - Should say Hello, Mindy!:', helloName('Mindy'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('running addNumbers:', firstNumber, secondNumber);
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}

console.log('Test - 2 + 7 should return 9:', addNumbers(2,7));
console.log('Test - 138 + 1000 should return 1138:', addNumbers(138,1000));
console.log('Test - -8 + 7 should return -1:', addNumbers(-8,7));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num01, num02, num03){
  console.log('running multiplyThree:', num01, num02, num03);
  let answer = num01 * num02 * num03;
  return answer;
}

console.log('Test - 3, 3, 3 multiplied should return 27:', multiplyThree(3,3,3));
console.log('Test - -1, 3, 3 multiplied should return -9:', multiplyThree(-1,3,3));
console.log('Test - -2, 3, -5 multiplied should return 30:', multiplyThree(-2,3,-5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('running isPositive:', number);
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
console.log('Test - 5 should return true:', isPositive(5));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// Note - I don't think I need to add anything extra here.

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array01 = [1, 2, 3, 5, 7];
let array02 = [];

function getLast( array ) {
  console.log('running getLast:', array)
  let last = array.length - 1;
  if (array.length > 0) {
    return array[last];   
  } else {
    return undefined;
  }
}

console.log('Test - get last should return 7:', getLast(array01));
console.log('Test - get last should return undefined:', getLast(array02));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
console.log('running find:', value, array);
for (let i = 0; i < array.length; i++){
  if ( value === array[i]){
    return true;
  } else if (i + 1 === array.length) {
    return false;
  }
}
}
console.log('Test - find value should return true:', find(7, array01));
console.log('Test - find should return false:', find(99, array01));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
console.log('running isFirstLetter:', letter, string);
  if (letter === string.charAt(0)) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array


function sumAll(array) {
  console.log('running sumAll:', array);
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  // TODO: loop to add items
  return sum;
}
console.log('Test - sumAll should return 18:', sumAll(array01));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let array03 = [-1, 0, .5, -7, 365];
let array04 = [-11, -.5, -3];

function positiveArray(array){
  console.log('running positiveArray:', array);
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0){
      newArray.push(array[i]);
    }
    if (i + 1 === array.length){
      return newArray;
    } 
  }
}
console.log('Test - positiveArray should return [1, 2, 3, 5, 7]:', positiveArray(array01));
console.log('Test - positiveArray empty array:', positiveArray(array02));
// I tried a few different things to try to get this to come out as an empty array but it kept coming out undefined.
console.log('Test - positiveArray should return [.5, 356]:', positiveArray(array03));
console.log('Test - positiveArray should return empty array:', positiveArray(array04));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

function minMax(array){
  console.log('running minMax');
  let minNum = Math.min(...array);
  let maxNum = Math.max(...array);
  let minMaxArray = [minNum, maxNum];
  return minMaxArray;
}

console.log('testing minMax:', minMax([1, 2, 3, 4, 77]));
console.log(array01);
console.log('testing minMax function on array01:', minMax(array01));
console.log(array03);
console.log('testing minMax function on array03:', minMax(array03));

// Comments - This one took some extra research.  I tried a few different things until I found out I had to use the 
// spread operator to convert the array to a list so I could use Math.min/Math.max on the array.  
