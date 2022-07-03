// Variable
const buttonA = document.querySelector('#button_A')
const headingA = document.querySelector('#heading_A')

buttonA.onclick = () => {
    const name = prompt('What is your name?')
    alert(`Hello ${name}, nice to see you!`)
    headingA.textContent = `Welcome ${name}` // Welcome ...
}

// Initializing a variable
let myName = 'Chris'
let myAge = 37

// Updating a variable
myName = 'Bob'
myAge = 40

// Variable types
// #1 Numbers
let age = 17
console.log(age) // 17

// #2 Strings
let name = 'John'
console.log(name) // John

// #3 Booleans
let iAmAlive = true
console.log(iAmAlive) // true

let test = 6 < 3
console.log(test) // false

// #4 Arrays
let myNameArray = ['Chris', 'Bob', 'Jim']
console.log(myNameArray[0]); // Chris
let myNumberArray = [10, 15, 40]
console.log(myNumberArray[2]) // 40

// #5 Objects
let dog = {
    name : 'Spot',
    breed : 'Dalmatian'
}

console.log(dog.name) // Spot

// Dynamic typing
let myNumber = '500'
console.log(typeof myNumber) // string
myNumber = 500
console.log(typeof myNumber) // number

// Constants
const bird = { species : 'Kestrel'}
console.log(bird.species);  // Kestrel

bird.species = 'Striated Caracara'
console.log(bird.species);  // Striated Caracara
