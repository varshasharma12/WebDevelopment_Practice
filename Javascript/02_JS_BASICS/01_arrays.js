const arr=[10,20, "Varsha",true]
arr.push()  //push the element in array
arr.unshift(false)

const arr1=arr.slice(1,3) //It will give the array of selected elements
//Original array will not change
console.log(arr1)
console.log("arr",arr)

const arr2=arr.splice(1,3)  //It will remove and add the elements 
//Original  array will change 
console.log(arr2)
console.log("arr",arr)

//console.log(arr)
//console.log(typeof arr)
//console.log(typeof null)