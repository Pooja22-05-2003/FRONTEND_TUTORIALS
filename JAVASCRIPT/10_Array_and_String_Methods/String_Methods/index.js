// String Methods in Javascript.

let myString="Pooja is a Good Good Boy";
console.log(myString.length); //1 length method

// Output : 19  // Space is also counted.

console.log(myString.indexOf("Good")); // 2. FirstIndex-Give the first index of that word.
// Output :  11

console.log(myString.lastIndexOf("Good")); // 3.LastIndexof-Give the last index of that word., if there are more than 2 words.
// Output :  11

console.log(myString.slice(5,9)); // 4.It slice the string from st to end-1
// Output :  is


d=myString.replace("Pooja","XYZ"); //5. after replacing u need to put in some variable.
// It replace only first occurence of the string.
console.log(d);




