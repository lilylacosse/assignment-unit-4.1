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
  return ('Hello, ' + name + '!');
}
// Remember to call the function to test
console.log(helloName('Lily'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log(addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}

console.log(multiplyThree(11, 2, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length - 1];
}

let sports = [];

console.log('The last sport in the array is:', getLast(sports), 'because the array is empty');

sports.push('skiing');
sports.push('tennis');
sports.push('bouldering');

console.log('The last sport in the array is now:', getLast(sports));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log('Is tennis included in the array?',find('tennis', sports));
console.log('Is fishing included in the array?',find('fishing', sports));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let splitString = string.split('');
  if (splitString[0] === letter) {
    return true;
  }
 return false 
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let classVote = [5, 3, 3, 4, 5, 2, 1, 2];

console.log('The sum of the class vote came to:', sumAll(classVote));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i])
    }
  }
  return newArray
}

let arrayOne = [1, -2, -3, 8, 4, 6, -9];
let arrayTwo = [-1, -2, -6, -5, -8, -9];

console.log('Test allPositive (expect positive array):', allPositive(arrayOne));
console.log('Test allPositive (expect empty array):', allPositive(arrayTwo));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// My challenge to write a function that returns the area of a    triangle using the base and height of the triangle as inputs. 

function triangleArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log('Triangle area, base=2, height=10 (expect 10):', triangleArea(2, 10));

console.log('Triangle area, base=18, height=30 (expect 270):',triangleArea(18,30));
 
