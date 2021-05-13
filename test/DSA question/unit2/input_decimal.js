
function runProgram(input) {
    var input = input.trim()

    var count = 0
    for (var i = 0; i <= input; i++) {


        if (input[i] == ".") {
            for (var j = i + 1; j < input.length; j++) {
                count++


            }
        }

    }

    
    console.log(count)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});