/*
Data Types in Javascript

*/


// 1. Numbers

var num1=42;
var num2=55.5;


// 2. Strings
var str1="This is a string";


// 3. Objects [ Key Values Pairs]

var marks={
    ravi:23,
    shubham:123,
    harry:99.90,
}

console.log(marks);


// 4. Booleans 
var a=true;
var b=false;
console.log(a,b);


// 5. Undefined 

var und=undefined; // Jo Cheez abhi defined nahi ki gayi hai .
console.log(und);

var h;
console.log(h); // here I only declared the variable and its value, is not declared but here bydefault its value is also undefined.


// NULL

var cc=null;
console.log(cc);



/*
⭐⭐ In Javascript , Datatypes are of 2 types.
1. Primitive Datatype. [Ye kisi se mil kar nahi bana]

=>Primitive DataTypes.
Ex:
1. Undefined
2. Null
3. Number 
4. String 
5. Boolean 
6. Symbol [Symbol har baar ek unique value generate krke deta hai ].



2. Reference Datatypes
=> Referrence Dataypes Example:
1. Arrays 
2. Objects.
*/


// 1. Arrays 
var arr=[1,2,"sg",3,4,5];
console.log(arr);

// Indexing starts from 0.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);