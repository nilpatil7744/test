
function runProgram(input) {
    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ")


    }

    const [row, col] = input[0]

    input.shift()
    const target = input[input.length - 1]
    var subfinal = ""

    var sumfinal = ""
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (input[i][j] == target) {

                var sub = (i - j)
                var sum = (i + j)

                for (var p = 0; p < row; p++) {


                    for (var Q = 0; Q < col; Q++) {
                        if (p - Q == sub) {
                            subfinal += (input[p][Q]) + " "

                        }
                    }
                    for (var Q = 0; Q < col; Q++) {
                        if (p + Q == sum) {


                            sumfinal += (input[p][Q]) + " "

                        }
                    }

                }
            }
        }
    }
    console.log(subfinal)
    console.log(sumfinal)
}


if (process.env.USERNAME === "Pratiksha") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`);
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

