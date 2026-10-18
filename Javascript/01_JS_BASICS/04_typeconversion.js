//Explicit Type Conversion
/*let s='100'    //let s='hello' ,let s='' ,let s=undefined/null
console.log(s)
console.log(typeof s)

let n=Number(s)
console.log(n)
console.log(typeof n)  */

/*let x=10   // let x=null/undefined
let s=String(x)
console.log(x)
console.log(typeof s)  */

/*let x=45 //let x=0
let b=Boolean(x)
console.log(b)*/


//Implicit Type Conversion
/*let a=100
let b='20'
console.log(a+b)   // Output-10020
console.log(a-b)   // Output-80
console.log(a*b)   //2000
console.log(a/b)   //5
*/

//Conditionals
/*let year=2024
if((year % 400 == 0) || (year % 4==0 && year % 100 !=0)){
    console.log("Leap Year")
}
else{
    console.log("Not leap year")
}*/


//Switch
/*let x=2
switch(x){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    default:
        console.log('Sunday')
}  */

//For loop
/*for(let i=0;i<10;i++){
    console.log(i)
} */

//While Loop
/*i=1
while(i<5){
    console.log(i)
    i++;
}*/

/*let i=6
do{
    console.log(i)
    i++
}
while(i<5) */

//for of
/*let arr1=[2,3,5,5,1,9]
for(let x of arr1){
    console.log(x)
}*/

//for in
/*let obj={
    name: 'Raj',
    age:55,
    gender:'Male',
    college:'GLA'
}
for(let x in obj){
    console.log(obj[x])
}*/

let val=7
let flag=0;
if(val<2){
    console.log('not prime')
}
for(let i=2;i<val;i++){
    if(val%i==0){
        flag=1
        break
    }
}
if(flag==0){
    console.log('prime')
}
else{
    console.log('not prime')
}