/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

For this algorithm, you can use the split() method.



titleCase("I'm a little tea pot")  // should return a string.
titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt")  // should return "Short And Stout". 
// 
Algorithm:
Step1: Define a function titlecase with str as a parameter.
Step2: In the function, define a variable word then set to str.toLowerCase().split(" "). to split sentence into array and change to lower case.
Step3: Create for loop by initializing i to 0 , check i  less than length of word, increment i by each iteration.
Step4: now first value is word[i] to uppercase, using slice to add the remaining sentence.
Step5: use console.log to call function with values.

*/

function titlecase(str)
{
 const word = str.toLowerCase(). split(" ");
 for ( let i=0 ; i<word.length; i++)
 {
    word[i]=word[i][0].toUpperCase() + word[i].slice(1);
}
return word.join(" ");
}
console.log(titlecase("I am little tea pot short and stout"));
console.log(titlecase("minecraft is the best game"));
