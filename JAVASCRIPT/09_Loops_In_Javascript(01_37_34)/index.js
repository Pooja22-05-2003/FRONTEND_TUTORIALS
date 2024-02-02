
// For loop in Javascript

var arr=[1,2,3,4,556,6];

console.log(arr);

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


//  2nd way) to iterate array
// forEach Loop

arr.forEach(function(element){
    console.log(element);
})

/*
Output :
(6) [1, 2, 3, 4, 556, 6]
 1
 2
 3
 4
 556
 6

*/



// 3rd Way ) While Loop

// Let ka scope ek block level scope hota hai, jab tak hum curly braces use kre , tab tak hi uska scope hota hai.
// let j=0;
// const ac=1; // const ka value we can't change



let j=0;
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}

/*
Output :
(6) [1, 2, 3, 4, 556, 6]
 1
 2
 3
 4
 556
 6


*/



// 4th way [Do-while loop]
let jj=10;

// Here even the condition is not true , but even one time loop is running.
do{
  console.log("hi");
  console.log(arr[jj]);
  j++;  
}while(jj<arr.length);