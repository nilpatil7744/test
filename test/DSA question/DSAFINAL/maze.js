function runProgram(input) {

    var input = input.trim()


    console.log(input)


    var x = 0

    var y = 0

    for(var i = 0; i < input.length; i++){
        if(input[i] == 'L'){

            x--

        }
        else if (input[i] == 'R'){
            x++
        }
        else if (input[i] == 'U'){
            y++
        }
        else if (input[i] == 'D'){
            y--
        }

    
    }

    console.log(x + " " + y)


}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`LLRDDR`);
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