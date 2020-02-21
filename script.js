// exercise 1
// var birthYear = 1985

// if (birthYear < 1982){
//   document.querySelector("body").innerHTML= "you suck"
//   console.log("you suck")
//  }else {
//     document.querySelector("body").innerHTML= "your hip"
//     console.log("your hip")
// }


// exercise 2
// If all the high temperatures in the three day forecast are above 85, log, "It's going to be hot as heck all week!" to the console.
// If all of the high temperatures in the three day forecast are below 40, log "It's going to be cold as heck all week!" to the console.
// If any of the low temperatures are below 20, log a sentence about the specific day. (Example: "Wednesday will be cold as heck!")
// If any of the high temperatures are above 95, log a sentence about the specific day. (Example: "Thursday will be hot as heck!")

// let temp = 200

// if (temp >= 95){
//     console.log("hot as heck")
// }
// else if (temp >= 85){
//     console.log ("its going to be hot")
// }
// else if (temp <= 20){
//     console.log("cold as heck")
// }
// else if (temp <= 40 ){
// console.log("its going to be cold")
// }


//exercise 3
// function hello(a,b,name){
//   document.querySelector("body").innerHTML= `Hello ${name} you are ${a+b} years old!!!!`
// }
// hello(50,90,"Mustafa")

// function Vacation(name, destination){
// document.querySelector("body").innerHTML= `Hello ${name} i really like you as a friend do you want to go to ${destination} ?`
// }
// Vacation("Justin", "Borneo")

// exercise 4
// function myTaco(name, shellType){
//     let finishedTaco =`Hello ${name}, your ${shellType} Taco if ready to gobble`
//     return (finishedTaco)
// }

// let myFinishedTaco = myTaco("Justin","Sushi")
// console.log(myFinishedTaco)

// exercise 5
// function add (a,b){
//     console.log(a+b)
//     return(a,b)
// }
// add(50,50)

// function subtract (a,b){
//     console.log(a-b)
//     return(a,b)
// }
// subtract(500,50)

// function multiply (a,b){
//     console.log(a*b)
//     return(a,b)
// }
// multiply(50,50)

// function divide (a,b){
//     console.log(a/b)
//     return(a,b)
// }
// divide(500,50)

// exercise 6
// let name = "Larry Mcgirk"
// let language = "English"

// function myLanguage (name, language){
//     if (language === "Spanish"){
//         console.log(`Hola ${name}`)
//     }
//      else if (language === "French"){
//         console.log(`Bonjour ${name}`)
//     }
//     else if (language === "English"){
//         console.log(`Hello ${name}`)
//     }
//     return(myLanguage)
// }
// myLanguage("Justin", "French")

// exercise 7
// function mySubway(name,breadType,sandwhichName){
//     let isToasted = true

//     if (isToasted === false){
//     console.log(`${name} your ${breadType} untoasted ${sandwhichName} is done! Gobble it up`)
//     }
//     else{
//         console.log(`${name} your ${breadType} toasted ${sandwhichName} is done! Gobble it up`)
//     }
// }
// mySubway("Larry Stink Fish","Whole Wheat","Stink Sub")

// exercise 8
// var dwayneObject = {
//     firstName: "Dwayne",
//     nickName: "The Rock",
//     lastName: "Johnson",
//     favoriteFood: "Eggs",
//     hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
//   }
// console.log(dwayneObject.hobbies.length)

//    function printHobbies(){
//   for (let i = 0; i<dwayneObject.hobbies.length; i++){
//     console.log(dwayneObject.hobbies[i])
//   }
//    }
// printHobbies()

// exercise 9
// var partyGuests = [
//     {
//       name: "Sam",
//       age: 18
//     },
//     {
//       name: "Jerry",
//       age: 45
//     },
//     {
//       name: "Lila",
//       age: 29
//     },
//     {
//       name: "Mary",
//       age: 68
//     },
//     {
//       name: "Todd",
//       age: 10
//     }
//   ]

//   function ageChecker(){
//       for (i=0; i<partyGuests.length; i++){
//          console.log(partyGuests[i])
//           if (partyGuests[i].age >= 21){
//               console.log(`your 21 or older so drink up`)
//           }
//           else{
//               console.log(`your too young to drink up. get out of here!!!`)
//           }
//       }

//   }
//   ageChecker()

// exercise 10
// function  CelsiusToFahrenheit(C){
// let Temp = C * 1.8 + 32
//   console.log(`You have converted Celesius to Farenheit which is ${Temp} Degrees`)
// }
// CelsiusToFahrenheit(20)

// function  FahrenheitToCelsius(F){
//     let Temp = F - 32 / 1.8
//       console.log(`You have converted Farenheit to Celsius which is ${Temp} Degrees`)
//     }
//     FahrenheitToCelsius(100)

// exercise 11
// var outsideArray =  [4, 7, 8008, 11, 9, 100];
// var mySum = 0;

// function addThemUp(){
//     for(i=0; i<outsideArray.length; i++){
//     // console.log(outsideArray[i])
// console.log(mySum += outsideArray[i])
//     }
// }
// addThemUp()

// exercise 12
// var scoresToAverage =  [22, 34, 62, 11, 90, 88, 70, 65, 22, 89, 85, 39, 71, 92, 98, 84];
// var mySum = 0;
// function myAverage(){
//     for(i=0; i<scoresToAverage.length; i++){
//              console.log(scoresToAverage[i])
//         console.log(mySum += scoresToAverage[i] / scoresToAverage.length)
//            }
// }
// myAverage()

// exercise 13
// function shippingCalculator(weight,distance,oversized){
// let cost = weight * distance / 100
// console.log(cost)
// if (oversized === true){
//     console.log(cost + 10)
// }else {
//     return(cost)
// }
// }
// shippingCalculator(50,1000,true)

