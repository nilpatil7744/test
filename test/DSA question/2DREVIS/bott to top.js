
function runProgram(input) {
    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ")

    }

    var [row, col] = input[0]

    input.shift()

 
    var arr = ""

    for(var i = 0; i < col; i++){

        for(var j = row-1; j >= 0; j--){
            
            arr += input[j][i] + " "
        }
    }

    console.log(arr)
    
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

