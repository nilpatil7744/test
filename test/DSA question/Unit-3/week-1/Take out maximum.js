// Take out maximum
// Description

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.


// Input
// Input Format

// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6


// Output
// Print the maximum sum of a subarray of size k.


// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21







function runProgram(input) {

    var input = input.split("\n")

    var [size, k] = input[0].trim().split(" ").map(Number)

    var arr = input[1].trim().split(" ").map(Number)

    console.log(arr)


    var curr_Sum = 0

    for(var i = 0; i <  k; i++){
        curr_Sum += arr[i]
    }

  
   let result = curr_Sum



   for(var i = k; i < size;i++){
       curr_Sum = curr_Sum + arr[i] - arr[i-k]

       result= Math.max(result,curr_Sum)
   }
   console.log(result)
  
   

    

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9
    `);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}

