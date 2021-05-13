
function runProgram(input) {

    var input = input.split("\n")

    var testcase = Number(input[0])
    var line = 1
    for (var i = 0; i < testcase; i++) {
        var [size, col]= input[line++].trim().split(" ").map(Number)
      

        var arr = []
        for (var j = 0; j < size; j++) {
            arr.push(input[line++].trim().split(" ").map(Number))
        }
  console.log(arr)
        var left = 0

        var bottom =size- 1

        var right =size- 1

        var top = 0

        var arr2 = ""


        for (var p = bottom; p >= left;p--) {

            arr2 += arr[p][left] 
        

        }
        left++

        for (var p = left; p <= right;p++) {
            arr2 += arr[top][p] 
        }
        top++
        for (var p = top;p <= bottom;p++) {
            arr2 += arr[p][right] 
        }
        right--
        for (var p = right;p >= left;p--) {
            arr2 += arr[bottom][p] 
         
        }
 
        console.log(arr2)
    }


}


if (process.env.USERNAME === "Pratiksha") {
    runProgram(`1
    3 3
    1 2 3
    4 5 6
    7 8 9`);
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

