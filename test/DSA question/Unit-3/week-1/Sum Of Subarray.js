// Sum of subarray
// Description

// You are given an array of N integers and a single integer K. You need to find out if there is a subarray, which has the sum exactly as K.


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains N, the size of the array, and K.

// Second-lineof each test casecontains N spaced integers, elements of an array.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 1 <= A[i] <= 10^12

// 1 <= K <= 10^12


// Output
// For each test case print "Yes", if there exists a subarray with sum K or else print "No".


// Sample Input 1 

// 3
// 5 3
// 1 2 1 3 4
// 4 5
// 1 2 1 3
// 3 2
// 1 2 1
// Sample Output 1

// Yes
// No
// Yes





function runProgram(input) {
  
    var input = input.split("\n")

    var testcase = Number(input[0])


    var line = 1

    for(var i = 0; i < testcase; i++){
        var[size,target] = input[line++].trim().split(" ").map(Number)

        var arr = input[line++].trim().split(" ").map(Number)

        sum(arr,target)
       
    }



    function sum(arr,target){


        arr.sort((a,b)=>a-b)


        var left = 0

        var right = arr.length-1


        while(left < right){
            if(arr[left]+arr[right] == target){
                
                return console.log("Yes");
            }
            else if(arr[left] + arr[right] > target){
                right--
            }
            else{
                left++
            }
      
        }

        return console.log("No")
    }
  

  

  
    
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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

