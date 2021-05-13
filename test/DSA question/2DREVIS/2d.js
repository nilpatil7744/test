
function runProgram(input) {
    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)

    }

    var [row, col, target] = input[0]
    input.shift()
    var count = 0

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col - 2; j++) {
            if (j + 2 < col) {

                if (input[i][j] + input[i][j + 1] + input[i][j + 2] === target) {
                    count++

                }

            }
            if (i + 2 < row) {

                if (input[i][j] + input[i + 1][j] + input[i + 2][j] === target) {
                    count++

                }

            }
            if (j + 2 < col && i + 2 < row) {
                if (input[i][j] + input[i + 1][j + 1] + input[i + 2][j + 2] == target) {
                    count++
                }
            }
            if(j + 2 < col && i >= 2){
                if (input[i][j] + input[i - 1][j + 1] + input[i - 2][j + 2] == target) {
                    count++
                }

            }
        }
    }
    console.log(count)

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`4 4 11
    1 2 1 8
    2 2 8 6
    8 1 2 5
    2 5 8 6`);
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

