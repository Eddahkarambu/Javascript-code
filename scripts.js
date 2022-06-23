// Create a function that given an array of strings in lowercase converts all the
// elements into uppercase.e.g given [‘to’, ‘an’] return [‘TO’, ‘AN’].

const arr = ['eddah', 'karambu', 'gikunda'];

const upper = arr.map(array => {
  return array.toUpperCase();
});
console.log(upper);


// Create a function that reverts a string. Do not .reverse method e.g given
// `going` it return `gniog`

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

// Write a function that converts an array of values from metres to kilometres
// using the map method. In the end, add the kilometres up in a new variable
// called "totalDistanceInKilometers" and return this variable.

 const meters = prompt ("Enter value in meters: ");
  const factor = 0.001
   const totalDistanceInKilometers = meters * factor

console.log(totalDistanceInKilometers)
   
    console.log(`${meters} meters is equal to ${totalDistanceInKilometers} kilometers. `);



    // Write a function that given an array of numbers returns only the numbers
    // that are divisible by 3 e.g given [1,2,6,7,9] it return [6,9].

    var numbers = [1,2,3,4,5,6,7,8,9,10]
for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0){
       console.log(numbers[i]);
    }
}


function divisible([num]) {

    // empty string
    let newNumbers = [];
    for (var i = num.length; i < num.length; i++) {
      if(num[i] % 3 === 0){
         console.log(divisible[1,2,3]);
      
    }
       
    }    
}


// Define a function called cleanNames that accepts an array of strings
// containing additional space characters at the beginning and end. The
// cleanNames() function should use the array map method to return a new
// array full of trimmed names. For example:

function cleanNames(input) {
    return input.map(val => val.trim());
 }
 const names = [" Eddah ", " Karambu", "Gikunda"];
 console.log(cleanNames(names));