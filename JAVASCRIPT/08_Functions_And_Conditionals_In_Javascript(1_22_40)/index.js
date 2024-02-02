/*
Functions in Javascript.

1. Functions is used in DRY (Don not Repeat) Principle 
*/

function avg(a,b)
{
    return (a+b)/2;
}


c=avg(4,2);
console.log("c1",c);


/*
2. Conditionals in Javascript.
*/


// 1. if - else Statement
var age=88;
if(age>18)
{
    console.log("You are not a Kid");
}

else 
{
    console.log("You are a Kid");
}



// 2. if else Ladder


if(age<13)
{
    console.log("You are child");
}
else if (age>=13 && age<=18)
{
    console.log("You are Teenager")
}
else 
{
    "You are adulthood";
}

console.log("End of Ladder !");



// For loop in Javascript

var arr=[1,2,3,4,556,6];

console.log(arr);

// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }


//  2nd way) to iterate array
// forEach Loop

// arr.forEach(function(element){
//     console.log(element);
// })

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

/*

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
let j=10;

// Here even the condition is not true , but even one time loop is running.
do{
  console.log("hi");
  console.log(arr[j]);
  j++;  
}while(j<arr.length);