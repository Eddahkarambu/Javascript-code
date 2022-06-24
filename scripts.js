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
const string = prompt('Enter a string: ')
console.log(reverseString(string))

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

    function divibleByThree(numbers){
        const len = numbers.length
        let num = []
        for(let i = 0; i < len; i++) {
            if(numbers[i] % 3 === 0){
               num.push(numbers[i])
            }
        }  
          return num
        }
        console.log(divibleByThree([2,3,4,5,6,7,8,9]))


// Define a function called cleanNames that accepts an array of strings
// containing additional space characters at the beginning and end. The
// cleanNames() function should use the array map method to return a new
// array full of trimmed names. For example:

function cleanNames(input) {
    return input.map(val => val.trim());
 }
 const names = [" Eddah ", " Karambu", "Gikunda"];
console.log(cleanNames([" Eddah ", " Karambu", "Gikunda"]))
 



function divibleByThree(numbers){
    const len = numbers.length
    let num = []
    for(let i = 0; i < len; i++) {
        if(numbers[i] % 3 === 0){
           num.push(numbers[i])
        }
    }  
      return num
    }
console.log(divibleByThree([2, 3, 4, 5, 6, 7, 8, 9]))
    

// Write a function that given an array checks whether the array is empty and
// returns true if empty and false if not empty.


function emptyArray(array){
    const len = emptyArray.length    
        if(array.length === 0){
           return false
        } else {
            return false
        }
    }      
    
    console.log(emptyArray([2,3,4,5,6,7,8,9]))

    // Write an array checkIfExists that accepts an array and a string and checks if
    // that string is in the array. It should return false if the string is not in array
    // and true if the string is in array e.g
    // checkIfExists ([‘chair’, ‘door’, ‘table`], ‘door’) return true


    const array = ['Eddah', 'karambu', 'gikunda'];

if (array.includes('two')) {
    return true
  
} else {
  return false
}



function Array(arr){
    const len = emptyArray.length
        if(array.length.includes('')){
           return true
        } else {
            return false
        }  
    }
    console.log(Array([]))



   
    // 10. Create a function `fill` that takes number of items in the array and a
    // value returns an array with the same number of items as given e.g
    // fill(4, ‘b’) returns [‘b’, ‘b’, ‘b’, ‘b’]

    const checkOccurrence = (array, element) => {
        let counter = 0;
        array.forEach()for (let i = 0; i <= array.length; i++) {
            if (array[i] == element) {
                counter++;
            }
        }
        console.log(counter);
    };