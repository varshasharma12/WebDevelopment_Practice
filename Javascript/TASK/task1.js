/* 
TASK1-
check wheather the title includes "Dark"
Find the index of "Knight"
Check wheather it includes "Avengers"
Extract "The Dark" using slice().  */

let movies=["The Dark Knight","Avengers","Batman"]
console.log(movies[0].includes("Dark"))
console.log(movies[0].indexOf("Knight"))
console.log(movies.includes("Avengers"))
console.log(movies[0].slice(0, 8));



/*
TASK2-
const movieName="Dangal";
const ticketPrice=200;
const quality=3;
Display: You booked 3 tickets for Dangal
Total amount:$600
use a template literal and caculate the tottal dynamically  */


const movieName = "Dangal";
const ticketPrice = 200;
const quality = 3;
const totalAmount = ticketPrice * quality;

console.log(`You booked ${quality} tickets for ${movieName}`);
console.log(`Total amount: $${totalAmount}`);