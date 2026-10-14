/* Return the length of the longest word in the provided sentence.

Your response should be a number. For these algorithms, you are allowed to use the split() method.



findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
findLongestWord("May the force be with you")  // should return 5.
// 
Algorithm:
Step1: Define a function longestFour with str as a parameter.
Step2: In the function, define a variable word by assigning it str.split(" "). to split sentence into array.
Step3: Define another variable Maxlength to 0.
Step4: Create for loop by initializing i to 0 , check i  less than length of word, increment i by each iteration.
Step5: Now use if statement inside the for loop to check word[i].length is greater than maxlength if true , assign word[i] to maxlength, if false return maxlength.
Step6: console.log to call function with values.

*/

function LongestWord(str)
{
const word = str.split(" ");
let maxlength = 0;
for(let i =0 ; i< word.length; i++)
     {
    if(word[i].length > maxlength)
    {   
        maxlength= word[i].length;
    }
}

return maxlength;
}
console.log(LongestWord("I Love Coding"));
console.log(LongestWord("Practice coding daily"));