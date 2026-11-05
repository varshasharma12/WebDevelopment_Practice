/*const promiseOne=new Promise(function(resolve,reject){
    //db calls,file read and write 
    let error=true
    if(error){
        console.log("Async task is failed")
        reject()
    }
    else{
        setTimeout(()=>{
            console.log("Async task is completed")
            resolve()
        },2000)
    }
    /* setTimeout(()=>{
        console.log("Async task is completed")
        resolve()
    },2000)
  */
/*romiseOne.then(function(){
    console.log("promise is resolved")
})
.catch(function(){
    console.log("promise is rejected")
})
.finally(function(){
    console.log("promise is either accepted  or rejected")
})
  */

const promiseTwo = new Promise(function(resolve, reject) {

    let data = null;
    // let data = { userName: "abc", password: "1234" };

    setTimeout(() => {

        if (data) {
            console.log("Data is fetched successfully");
            resolve({ data });
        }
        else {
            console.log("Promise failed");
            reject("Error: Something went wrong");
        }

    }, 2000);

});

promiseTwo
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });
 
async function consumePromiseTwo(){
    try{
        const response=await promiseTwo
        console.log(response)
    }catch(error){
        console.log(error)
    }
}    


consumePromiseTwo()
const fetchUser=async()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    console.log("response from Api endpoint",response);
    console.log("data from Api",data);
    }
    catch(error){
        console.log(error);
    }
    };
    fetchUser();
