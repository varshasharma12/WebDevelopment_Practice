/*console.log("I am task1")

console.log("I am task2")
setTimeout(()=>console.log("I am called after 2 seconds"),2000)

console.log("I am task3") */

//inteval
//Callback - calling function inside the function 

function placeorder(callback){
    setTimeout(()=>{
        console.log("1. order is placed")
    },1000)
    callback()
}
function makepayment(callback){
    setTimeout(()=>{
        console.log("2. payment is done")
    },1000)
    callback()
}
function confirmOrder(callback){
    setTimeout(()=>{
        console.log("3. order is confirmed")
    },1000)
    callback()
}
function assignDeliveryPartner(callback){
    setTimeout(()=>{
        console.log("4. delivery partner is assigned")
    },1000)
    callback()
}
placeorder(function(){
    makepayment(function(){
        confirmOrder(function(){
            assignDeliveryPartner(function(){
                setTimeout(()=>{
                    console.log("5. order is delivered")
                },1000)
            })
        })
    })
})
