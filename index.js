/**
 * @type {number} my age
 */
let myAge = 3

/**
 *
 * @param {string} name the name of the person you want to greet
 * @returns {string} the greeting returned
 */
function greet (name) {
  return `Hello, ${name}!`
}

/**
 *
 * @param {number} a the first number to add
 * @param {number} b the second number to add
 * @returns {number} the sum of a + b
 * @description Take two numbers and add them together
 */
function sum (a, b) {
  return a + b
}

/**
 * @param {Person} person
 * @returns {string}
 */
function personGreet (person) {
  return `Hi, I'm ${person.name} and I'm ${person.age}!`
}

/**
 * @template T
 * @param {T} data the data you want to clone
 * @returns {T} the cloned data
 * @description This function takes any valid JSON data and returns a deep copy of it
 */
function deepClone (data) {
  return JSON.parse(JSON.stringify(data))
}

const h1 = document.createElement('h1')
h1.textContent = 'Hello TS in JS!'
document.body.append(h1)

/**
 * @type {AnotherType}
 */
const listEl = document.querySelector('.list-of-stuff')

/**
 * @type {Person[]}
 */
const people = [
  {
    name: 'Nicolas',
    age: 34
  },
  { age: 28, name: 'Ed', hungry: true }
]
