/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Algorithm:

Step1: Define a function largestofFour with arr as a parameter.
Step2: In the function, create an empty array result.
Step3: Create for loop by initializing i to 0 , check i  less than length of arr, increment i by each iteration.
Step4: Create a variable max and assign it to arr[i][0];
Step5: Create another for loop by initializing j to 1 , check j  less than length of arr[i], increment j by each iteration.
Step6: Now use if statement inside the for loop to check arr[i][j] is greater than max if true , assign arr[i][j] to max.
Step7: Push the max value to result, if false return result.
Step8: console.log to call function with array values.



*/
function LargestofFour(arr)
{

    const result=[];
    for(let i =0; i <arr.length; i++)
    {
        let max = arr[i][0];
        
        for(let j=1; j<arr[i].length; j++)
        {
        if(arr[i][j]>max)
        {
            max=arr[i][j];
        }}
        result.push(max);
    }
    return result;
}
console.log(LargestofFour([ [23,45,6,77], [34,16,88,21], [11,98,8],[33,45,7,54]]));