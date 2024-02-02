// For More Exploation -> See the MDN website (Array Methods Javascript)


// Array Methods is same as functions (Inbuilt functions in the array);

let myArr=[1,"Fan","Camera",null];

// Array Methods
console.log(myArr.length); //1 length 
//output:=4

myArr.pop(); // 2. Pop

console.log(myArr.length);
//output:=3


myArr.push("Pooja"); //3. Push
myArr.push("xyz");
console.log(myArr.length);

// output : 5

myArr.shift()   //4. Shift= It removes the first element from beginning

console.log(myArr);
// output : (4) ['Fan', 'Camera', 'Pooja', 'xyz'] // It removed 1 from the front.

console.log(myArr);
// (4) ['Fan', 'Camera', 'Pooja', 'xyz'] 


myArr.unshift("hello"); //5. It will add the word in the starting of the array

console.log(myArr);

// 
const newlen=myArr.unshift("PP");
console.log(newlen);

// Output : 6

myArr.toString() // 6. It will convert the whole array into string.
console.log(myArr);



d=[4,3,6,5,44];
d.sort();  // 7. Sort the numbers according to alphabatical order
console.log(d);
// output : [3, 4, 44, 5, 6] // It was not sorting numbers mathematically, but sorting the numbers alphabatically.


