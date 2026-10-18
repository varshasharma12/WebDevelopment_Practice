//Arithmetic operator: +,-,*,/,%

/*let a=10
let b=20
let c=b%a
console.log(c) */

//Assignment operator: +=,-=,*=,/=,%=

/*let a=10
let b=20
a+=b
console.log(a) */

//Relational operator: <=,>=,==,===,!=

/*let a=20
let b=20
console.log(a!=b)*/

//Ternary Operator
/*let z=10;
let y=20;
let c=(z>y)? "Z is greater" : "y is greater"
console.log(c)  */

//Null Coalsing Operator
/*let z=10
let y=20
let x=null  // x=undefined
console.log(x ?? "right side value")  */

//Array
//let arr=[3,5,6,1,8]

//Spread Operator
//console.log(...arr)

//  let arr2=arr ---Wrong method 
/*let arr2=[...arr] //Correct way of copying array 
arr2[0]=100
console.log('arr2 => ',arr2)
console.log('arr => ' ,arr)  */

//Rest operator(It will shrinks the numbers)(Array,Objects)
/*function add(...nums){
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    return sum
}
console.log(add(3,4,5,1)) */

/*let obj={
    name: 'Varsha',
    age:  45,
    address:{
        city:'Mathura',
        state: 'UP',
        pin:281006
    }
}*/
/*let obj2={...obj}
obj2.name="Rahul"
console.log(obj2.name)  //console.log(obj['name'])
console.log(obj['age'])
console.log(obj.address.city) */

/*let obj2= structuredClone(obj)
obj2.address.city="Mumbai"
console.log(obj2.address.city)
console.log(obj.address.city) */

//const PI=3.14
//console.log(Math)   //Here Math is an Object
/*let pi=Math.PI
console.log(pi)
console.log(Math.round(4.3))
console.log(Math.round(4.7))
console.log(Math.round(4.5))

console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))

console.log(Math.min(3,4,6,1))
console.log(Math.max(3,4,6,1))
console.log(Math.sqrt(4))
console.log(Math.cbrt(27))
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10+1))  */

/*let x=10
x++  //post increment
console.log(x++)
++x  //pre icrement
console.log(--x)
x--  //post decrement
--x  //pre decrement
console.log(x) */

/*let obj={
    name:'Varsha',
    age:20,
    address:{
        city:'Mathura',
        state:'UP'
    }}     //?. = Optional Chaining Operator 
console.log(obj.address ?.pin)*/
