var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write an arrow function that takes a number as an argument and decides if the number is evenly divisible by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
    //  function evenlyByThree(num) {
    //      if (num % 3 === 0){
    //          return num + " is evenly divisible by three." ;
    //      } else {
    //          return num + " is not evenly divisible by three." ;
    //      }
    //  }
    const itIs = ' is evenly divisible by three.'
    const itIsNot = ' is not evenly divisble by three.'
     
    const evenlyByThree = num => (num % 3 === 0) ? `num + ${itIs}` : `num + ${itIsNot}`;
 
     
     console.log(evenlyByThree(385));


// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

let helloMe = {
        firstName: "Sebastian",
        lastName: "Becerra",
        languagesSpoken: ["English", "Spanish"],
        currentlyWatching: ["Mad Men", "Parks & Rec", "Etc."],
        getData: function() {return "My name is " + this.firstName + " " + this.lastName + " and I can speak " + this.languagesSpoken[0] + " as well as " + this.languagesSpoken[1] + "."} 

};
console.log(helloMe.getData())



// -------------------------------------------------
// Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item as one string. Expected output: "streetlamp teeth nephew database"
// let newString = (arr) => {
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if (i%2 === 0)
//         newArr.push(arr[i])
//     } return newArr.join(" ")
// }

// console.log(newString(randomNouns))

//const fn = (e,i, arr)

let res = randomNouns.filter((_, i) => i%2 === 0)
console.log(res)




// 3b. Create an arrow function that takes in the variable and returns an array with the number of letters in each string. Expected output: [10, 6, 5, 10, 6, 11, 8]

let makeNumber = (arr) => {
    return arr.map(value => value.length)
}

console.log(makeNumber(randomNouns))

// 3c. Stretch: Create a function called capitalizer that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

let makeNumberCap = (arr) => {
    return arr.map(value => value.toUpperCase()).join(", ")
}

console.log(makeNumberCap(randomNouns))


let res2 = randomNouns.map((e) => e.toUpperCase())

console.log(res2.join(", "))
// -------------------------------------------------
// Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

let collection = ["learn", "academy", "sandiego"]

let result = collection.map(text => text.split('').sort().join(''))

console.log(result)
// let alphabetSoup = (arr) => {
//     return arr.split('').sort().join(' ')
// }
// //split sort join

// console.log(alphabetSoup(testString2))

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
let allOfTheLetters = (arr, arr2, arr3) => {
    let newArr = arr+arr2+arr3
    return newArr.split('').sort().join('')
}
console.log(allOfTheLetters(testString1, testString2, testString3))


// -------------------------------------------------
// Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
let combineArr = (arr1, arr2) =>{
    let newArr = arr1.map((value, i) => value + " " + arr2[i])
    return newArr.join(' ')
}

console.log(combineArr(amounts, animals))


// 5b. Stretch: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
