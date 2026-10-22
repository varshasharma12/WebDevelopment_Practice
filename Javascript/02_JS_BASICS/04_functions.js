function verifyPayment(transactionId){  //Regular Function
    if(transactionId===undefined){
        console.log("Payment failed !!")
        return;
    }
    console.log("transactionID:",transactionId)

    console.log("Payment is Successfull")

}
verifyPayment()
//function addExpenses(...exp){
const totalExpenses=(...exp)=>{

    console.log("expenses",exp)     //Rest Operator
   // return exp1+exp2;
}

const addNumbers= (a,b)=>{
    return a+b;
}                    
//const total=addExpenses(20,23)
//console.log("total",total)

const user1={
    name:"user1",
    email:"user@gmail.com",
    address:"Mathura",
    ottSubscriptions:{
        netflix:"basic",
        amazonPrime:"Premium"
    },
    show:()=>{
        console.log(`user:${this.name} has netflix subscription of ${this.ottSubscriptions?.netflix}`)
    }
}
