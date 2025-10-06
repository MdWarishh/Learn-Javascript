// ================================
          //! Day 2: Variables & Data Types
// ================================

//  Variables store data values
// We can declare using var, let, const

var oldWay = "I am var (function scoped)";
let modernWay = "I am let (block scoped)";
const constantValue = "I cannot be reassigned";

console.log(oldWay);
console.log(modernWay);
console.log(constantValue);

             //!  Data Types
// 1. Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// 2. Non-Primitive: Objects, Arrays, Functions

let myName = "Warish";       // String
let age = 22;                // Number
let isStudent = true;        // Boolean
let emptyValue = null;       // Null
let notAssigned;             // Undefined

console.log(typeof myName);  // "string"
console.log(typeof age);     // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof emptyValue); // "object" (special case in JS)
console.log(typeof notAssigned); // "undefined"
