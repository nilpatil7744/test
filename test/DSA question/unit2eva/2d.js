
function runProgram(input) {
    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ")

    }

    
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
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

