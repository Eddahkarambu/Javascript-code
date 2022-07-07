// Create a function that given an array of strings in lowercase converts all the
// elements into uppercase.e.g given [‘to’, ‘an’] return [‘TO’, ‘AN’].

const arr = ['eddah', 'karambu', 'gikunda'];

const upper = arr.map(array => {
  return array.toUpperCase();
});
console.log(upper);


function upperCase(array) { 
    const upper = array.map(arr => {
        return arr.toUpperCase();
      });
      return upper
}
console.log(upperCase(['eddah','karambu','gikunda']))





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


function kilometer(array){
    const factor =0.001
    const totalDistanceInKilometers = array.map(arr =>{
      return  factor*arr
    })
    return totalDistanceInKilometers
    
  }
  console.log(kilometer([7000,6000,8000]))



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

    // Write a function checkIfExists that accepts an array and a string and checks if
    // that string is in the array. It should return false if the string is not in array
    // and true if the string is in array e.g
    // checkIfExists ([‘chair’, ‘door’, ‘table`], ‘door’) return true
    function checkIfExists(array,str) {
        if (array.includes(str)) {
            return true
        }else{
            return false
        }      
    }   console.log(checkIfExists(['eddah','yui'],'yuiiii'))



   
    // 10. Create a function `fill` that takes number of items in the array and a
    // value returns an array with the same number of items as given e.g
    // fill(4, ‘b’) returns [‘b’, ‘b’, ‘b’, ‘b’]

       
    const checkOccurrence = (num, element) => { 
        let number =[]
          for(let i =0; i<num; i++){
            number.push(element)
          }
        return number      
  };
      console.log(checkOccurrence(4,'eddah'))

// 6th July 2022
      // 1. Write a JavaScript function to check whether an `input` is an array or not. 
      // Test Data : 
      // console.log(is_array('w3resource')); 
      // console.log(is_array([1, 2, 4, 0])); 

      const array = (input) =>{
        if (toString.call(input) === "[object Array]")
          return true;
        return false;   
          };
      console.log(array('w3resource'));
      console.log(array([1, 2, 4, 0]));
      

//       2. Write a JavaScript program to sort the items of an array. Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; 
// Sample Output : -4,-3,1,2,3,5,6,7,8 
      
      const names = ["Karambu", "Dedan", "Muthomi", "Erick", "Eddah"];
      console.log(names.sort());
      
      var priceList = [ 3, 8, 7, 6, 5, -4, 3, 2, 1];
      priceList.sort();
      console.log(priceList)

      // Write a JavaScript program which prints the elements of the following array. 
      // Note : Use nested for loops. 
      // Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; 
      // Sample Output : 

    const input =  [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; 


 for (let i=0; i < input.length; i++) {
 
  for (let j=0; j < input[i].length; j++) {
 
    console.log(input[i][j]);
  
  }
}

// . There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 
// Sample array : 
// array1 = [1,0,2,3,4]; 
// array2 = [3,5,6,7,8,13]; 
// Expected Output : 
// [4, 5, 8, 10, 12, 13] 


function arrays (arr1, arr2) {
  let resultSum = [];
  let arrlength ;
  if (arr1.length > arr2.length) {
  arrlength = arr1;
  } else {
  arrlength = arr2;
  }
  
  for (let i = 0; i < arrlength.length; i++) {
  if (arr1[i] == undefined) {
  arr1[i] = 0;
  } else if (arr2[i] == undefined) {
  arr2[i] = 0;
  }
  
  resultSum.push(arr1[i] + arr2[i]);
  
  }
  return resultSum;
  }
  console.log(arrays([1,0,2,3,4], [3,5,6,7,8,13]));