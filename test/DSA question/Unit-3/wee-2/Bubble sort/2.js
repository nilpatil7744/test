// Bubble Sort Problem

// Description

// You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


// Input
// Input Format:

// First line of input contains N

// Second line of input contains N numbers

// Constraints:

// N < 500


// Output
// Output the numbers given after sorting it in increasnig order


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9



// time complexity O(n^2) for each testcase

function runProgram(input) {

    var input = input.trim().split("\n")
    var input = input[1].trim().split(" ").map(Number)
   
    

    for(var i = 0; i < input.length-1;i++){

        for(var j = 0; j < input.length-i-1;j++)  //loop will run for iteration - 1
        {
          if(input[j] > input[j+1]) 
          {

            // let temp = input[j]   //assigning value of j
    
            // input[j] = input[j+1]   //changing j with next value i.e j+1
           
            // input[j+1]= temp    /// assigning j+1  to temp 

            [input[j],input[j+1]] = [input[j+1],input[j]]  /// destructuring

          }
        }
   
    }
    console.log(input.join(" "))

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`5
    3 5 0 9 8`);
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








