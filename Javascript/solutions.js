                            //Section A

/*Q1. What will be the output?
● A. null, number, array
● B. object, number, object
● C. object, NaN, array
● D. undefined, number, object
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);

Answer-- B. Object,number,object */

/*Q2. Predict the output.
● A. 205, 200, 24
● B. 205, 200, NaN
● C. NaN, 200, NaN
● D. 2203, 403203, 24
console.log(2 + "203");
console.log(403 - "203");
console.log(2 * "12abc");

Answer--   D. 2203   B.200,NAN  */

/*Q3. Which statement about let, const, and var is correct?
● A. var is block-scoped.
● B. let can be redeclared in the same scope without error.
● C. A const object cannot have its properties modified.
● D. let and const are block-scoped, while var is function-scoped.

Answer-- D. let and const are block-scoped, while var is function-scoped. */


/*Q4. What is the output?
● A. Pass, Eligible
● B. Pass, followed by a ReferenceError
● C. ReferenceError, ReferenceError
● D. undefined, undefined
let score = 12;
if (score > 10) {
var result = "Pass";           //Function Scope
let status = "Eligible";      //Block Scope 
}
console.log(result);
console.log(status);  

Answer-- B. Pass,followed by ReferenceError   */

/*Q5. Which loop is most suitable when you need to iterate over the values of an array?
● A. for...in
● B. for...of
● C. if...else
● D. switch

Answer-- B. for...of   */    //one by one access the value of array

/*Q6. What is the main difference between return and console.log() inside a function?
● A. Both return values to the caller.
● B. console.log() returns the calculated result.
● C. return sends a value back to the caller; console.log() displays a value.
● D. return can only be used in arrow functions.

Answer-- C. return sends a value back to the caller; console.log() displays a value.   */

/*Q7. What does the rest parameter do in this function?
● A. Converts all arguments into a string.
● B. Collects the arguments into an array.
● C. Expands an existing array into arguments.
● D. Allows only one argument.
function calculateTotal(...prices) {
return prices.length;
}

Answer-- B. Collects the arguments into an array.     */

/*Q8. Which statement about arrow functions and “this” is correct?
● A. Arrow functions always bind this to the object that calls them.
● B. Regular functions always bind this to the object in which they are defined.
● C. Arrow functions inherit this from their surrounding lexical context.
● D. Arrow functions cannot access object properties.

Answer-- C. Arrow functions inherit this from their surrounding lexical  */ 

                         //SECTION - B

/*Q9. Operators and type coercion
Predict the output of each statement and explain why the results differ.  
console.log("5" + 2);        //52
console.log("5" - 2);        //3     string converts to number
console.log(true + 2);       //3     true=1
console.log(Boolean("false"));   //True           */


/*Q10. Scope and variable declarations
Write the output in order. Explain why amount and discount behave differently.
var amount = 100;
function calculate() {
var amount = 200;
let discount = 20;
if (true) {
var amount = 300;
let discount = 50;
console.log(amount, discount);             //300 50
}
console.log(amount, discount);             //300 20
}
calculate();
console.log(amount);                       //100       */

/*Q11. Functions and return values
What will be printed? Rewrite the function so that result stores the calculated price.  
function calculatePrice(price, quantity) {    //return is missing 
console.log(price * quantity);
}
const result = calculatePrice(100, 3);    //300
console.log(result);                      //undefined         */

/*Q12. Array mutation
Predict the output. Why are modifications to the array allowed even though it was declared using const?
const products = ["Milk", "Bread", "Rice"];
products[1] = "Eggs";
products.push("Oil");
console.log(products);  //[ 'Milk', 'Eggs', 'Rice', 'Oil' ]
console.log(products.length);   //4   */

/*Q13. Object methods and this
Predict the output. What does this refer to during this method call?
const employee = {
name: "Aman",
salary: 30000,
showDetails() {
console.log(this.name, this.salary);    //Aman 30000
}
};
employee.showDetails();      */

/*Q14. Rest parameters and spread syntax
Predict both outputs and explain the difference between the two function calls.
function addNumbers(...numbers) {
return numbers.length;
}
const values = [10, 20, 30, 40];
console.log(addNumbers(values));     //1
console.log(addNumbers(...values));  //4
//Rest ...numbers	Collect the multiple arguments in one array
//Spread ...values	expand the elements of array in different different values   */

    
               //Section C: Debug the Code

/*Q15. Fix the variable scope issue
The developer wants to print the message after the if block, but the code produces an error. Identify the error,
correct the code, and explain why the original code fails.
if (true) {
//let message = "Order placed successfully";   //Block scope 
var message = "Order placed successfully";     //Function scope
}

console.log(message);   */

/*Q16. Fix the shopping cart calculation
Identify the logical error, correct the loop, and explain why the original code produces an incorrect result.
function calculateCartTotal(...prices) {
let total = 0;
for (let i = 0; i < prices.length; i++) {
total += prices[i];                  //i < array.length  correct condition.
                                      //i <= array.length one extra iteration.
} 
return total;
}
console.log(calculateCartTotal(100, 200, 300));    
//total + Undefined = NaN     */

/*Q17. Fix the object method
Explain why the expected username may not be printed. Rewrite the method correctly and state one situation
where using an arrow function is appropriate.  
const user = {
userName: "Rahul",  
//showName: () => {   (undefined) Because Arrow function hasnot it's own this 
showName(){   
console.log(this.userName);
}
};
user.showName();   */

/*Q .18 Type Coercion — Predict the Output  
console.log([] + []);   //Empty String
console.log([] + {});    //[object Object]
console.log("5" - - "2");   //7
console.log(null + 1);      // 1
//Predict the output of each statement and explain why.   */


/*Q19. Scope and Hoisting 
console.log(a);    //undefined 
var a = 10;   

console.log(b);    //ReferenceError

let b = 20;
● Which statement executes successfully?   console.log(a) and gives undefined
● Which statement produces an error?   console.log(b)  reference error
(Because variable access before variable declaration)

● Explain the role of hoisting and the Temporal Dead Zone (TDZ).
Hoisting: JavaScript processes variable and function declarations before executing the code in their scope.
TDZ (Temporal Dead Zone): It is the period between entering the scope and initializing a let or const variable. 
Accessing the variable during this period causes a ReferenceError
*/

                      //JavaScript Interview-Level Questions

/*1. What is the difference between == and ===?
  == :  Compares the values only.
Example: 5 == "5"  true

  === : Compares both value and data type without type conversion.
Example: 5 === "5"  false       */

/*2. What is the difference between undefined and null?
undefined: A variable is declared but has not been assigned a value.
Example: let x;  undefined

null: Represents an intentional absence of a value.
Example: let x = null;      */

/*3. What is the difference between for...in and for...of?
for...in: Iterates over the keys or property names of an object.
for...of: Iterates over the values of an iterable, such as an aray or string.

/*4. Can a function return another function? Give a real-world use case.
 Yes, a function can return another function.
It is useful for creating reusable functions, such as a discount calculator.   */

/*5. What happens if a function has no explicit return statement?
 The function returns undefined by default.   */

/*6. What is the difference between passing a primitive value and passing an object to a function?
 Primitive values are passed by value, so changes to the parameter do not affect the original variable.
 Objects are also passed by value, but that value is a reference, so modifying object properties can affect the original object.    */

/*7. What is the difference between shallow copying and deep copying an object?
 A shallow copy copies top-level properties but shares nested objects.
 A deep copy creates independent copies of nested objects too.    */

/* 8. Why is NaN !== NaN true?
Because NaN is not equal to any value, including itself, according to JavaScript's equality rules.    */

/*9. What is the difference between function declarations and function expressions regarding hoisting?
Function declarations can be called before they appear in the code. Function expressions assigned to var, let, or const cannot be used before their initialization.   */

/*10. When would you use an arrow function instead of a regular function?
 Use arrow functions for short callbacks and when you want to inherit this from the surrounding scope. Use regular functions when you need their own this.   */