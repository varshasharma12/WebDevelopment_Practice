//Primites: String,number,undefined,null,boolean,bigit
//Non-primites(References): Arrays,objecrs,Functions


let score = 123
let scoreInString = String(score)

let userName
console.log(userName)
console.log(typeof userName)

let salary=null;
console.log(typeof salary)

let userInfo = {
    userName: "Varsha",
    address: "Mathura",
    socialMediaHandles:{
        fb:"https://fb.com"
    }
}
console.log(userInfo.address)


let branch=["CSE","IT","ECE"]  //arrays

function printHello(){   //functions
    console.log("Hello World")
}
printHello()
