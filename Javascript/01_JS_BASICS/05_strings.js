let string1="  Varsha"   //String is immutable
let string2=new String("Sharma")

console.log(typeof string1)
console.log(typeof string2)

console.log(string1.trim)
console.log(string1.includes("sh"))
console.log(string1.toUpperCase())
console.log(string1)

const url= "https://www.google.com/search?q-mdn+web"
console.log(url.replace("+","_"))

console.log(string2.slice(1,4))

const userName="Varsha"
const repoCount=20
console.log(`My name is : ${userName} and my repo count :${repoCount}`)   