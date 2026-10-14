/*Fibonacci Sequence
A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.

His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...



Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.

In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:

n = 43 -> x
n = 101 -> x
n = 227 -> x
n = 491 -> x
n = 881 -> x

Algorithm:
Step1: Define a function fibonacci with n as a parameter.
Step2: In the function, define 2 variable a and b with the value 0 and 1.
Step3: Create for loop by initializing i to 0 , check i  less than n, increment i by each iteration.
Step4: Then, update the values of a and b to the next numbers, return b after for loop.
Step5: use console.log to call function with values.

*/

function fibonacci(n)
{
    let a = 0 , b=1;
    for( let i=0 ;i < n;i++)
    {
        [a,b] = [b,a+b];
    }
    return b;
}
console.log(fibonacci(6));
console.log(fibonacci(10));