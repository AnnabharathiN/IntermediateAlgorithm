/*Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  // You can do this!
}
sumAll([1, 4]);

The lowest number will not always come first.

sumAll([1, 4])  // should return a number.
sumAll([1, 4])  // should return 10.
sumAll([4, 1])  // should return 10.
sumAll([5, 10])  // should return 45.
// 
Algorithm:
Step1: Define a function sumallnumber with str as a parameter.
Step2: In the function, define 2 variables low and high and assign it to the 2 value of array.
Step3: Check low is greater than high using if statement if true then assign first array value to low and sceond to high.
Step4: Define a local variable sum =0.
Step5: Create for loop by initializing i to low , check i  less than or equal to high, increment i by each iteration.
Step6: now add the value of i to sum and return sum when for loop ids finished.
Step7: use console.log to call function with values.

*/

function sumallnumber(arr)
{
  let low=arr[0];
  let high=arr[1];

  if (low>high)
  {
    low = arr[1];
    high = arr[0];
  }
  let sum = 0;
  for ( let i=low; i<=high;i++)
  {
    sum +=i;
  }
return sum;
}
console.log(sumallnumber([4,9]));
console.log(sumallnumber([3,5]));