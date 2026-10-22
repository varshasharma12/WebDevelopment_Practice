const user1={
    name:"user1",
    email:"user@gmail.com",
    address:"Mathura",
    ottSubscriptions:{
        netflix:"basic",
        amazonPrime:"Premium"
    },
    show: function showDetails(){
        console.log(`user:${this.name} has netflix subscription of ${this.ottSubscriptions.netflix}`)
    }
}

//console.log(user1.show)
//console.log(user1.email)
//console.log(user1["email"])
//console.log(user1.ottSubscriptions.netflix)

//Object.keys(user1)
//Object.values(user1)

const obj1={a:1,b:2}
const obj2={c:3,d:5}
/*const obj3=Object.assign(obj1,obj2)   //assign-source and target
obj1.b="varsha"

//const obj3={...obj1,...obj2}

console.log("obj1",obj1)   //Shallow Copy
console.log("obj3",obj3) */

const obj3={...obj1,...obj2}  //Spread operator(It will not modified the source object)
obj1.b="varsha"
console.log("obj1",obj1)
console.log("obj3",obj3)

//Object -Destructuring 

const{user,email,address}=user1

