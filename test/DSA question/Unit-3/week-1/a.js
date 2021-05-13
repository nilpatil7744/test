
function runProgram(input) {
  
    var input = input.split("\n")

    var testcase = Number(input[0])

    var line  = 1 
    for(var i = 0; i < testcase;i++){
        line++

        var arr = input[line].trim().split("")
        line++
          var U = input[line++].trim()

        sum(arr,U)
    }

    function sum(arr,U){
     
    }
    
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`1
    4
    aman
    a`);
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

