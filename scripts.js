// converts all the elements into uppercase.


const arr = ['eddah', 'karambu', 'gikunda'];

const upper = arr.map(array => {
  return array.toUpperCase();
});
console.log(upper);


// Create a function that reverts a string

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


// metres to kilometres
 const meters = prompt ("Enter value in meters: ");
  const factor = 0.001
   const totalDistanceInKilometers = meters * factor

console.log(totalDistanceInKilometers)
   
    console.log(`${meters} meters is equal to ${totalDistanceInKilometers} kilometers. `);