function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {

        input[i] = input[i].trim().split(" ").map(Number)

    }
    var [row, col] = input[0]

    input.shift()




    for (var i = 0; i < row; i++) {
        for (var j = input[0][col - 1]; j >= 0; j--) {

            if (i % 2 == 0) {
                console.log(input[i][j])
            }

        }


    }




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