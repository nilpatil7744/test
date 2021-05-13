
function runProgram(input) {
    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ")

    }


    for (var i = 0; i < input.length; i++) {
        var count = 0
        var maincount = 0
        for (var j = 0; j < 1; j++) {
            if (input[i][j] == 'o' && input[i][j + 1] == 'o' && input[i][j + 2] == 'o') {
                count++
            }
            else if (input[i][j] == 'x' && input[i][j + 1] == 'x' && input[i][j + 2] == 'x') {
                maincount++
            }
        }

        if
            (count > 0 && maincount > 0) {
            console.log("Tie")
        }
        else if (count > 0) {
            console.log("o")
        }
        else if (maincount > 0) {
            console.log("x")
        }
    }

    for (var i = 0; i < 1; i++) {
        var count = 0
        var maincount = 0
        for (var j = 0; j < 1; j++) {
            if (input[j][i] == 'o' && input[j + 1][i+1] == 'o' && input[j + 2][i+2] == 'o') {
                count++
            }
            else if (input[j][i] == 'x' && input[j + 1][i+1] == 'x' && input[j + 2][i+2] == 'x') {
                maincount++
            }
        }

        if(count > 0 && maincount > 0) {
            console.log("Tie")
        }
        else if (count > 0) {
            console.log("o")
        }
        else if (maincount > 0) {
            console.log("x")
        }


           
        
        
    }

    for (var i = input.length - 1; i > 1; i--) {
        var count = 0
        var maincount = 0

        for (var j = 0; j < 1; j++) {

            if (input[i][j] == 'o' && input[i - 1][j + 1] == 'o' && input[i - 2][j + 2] == 'o') {
                count++
            }
            else if (input[i][j] == 'x' && input[i - 1][j + 1] == 'x' && input[i - 2][j + 2] == 'x') {
                maincount++
            }
        }

        if
            (count > 0 && maincount > 0) {
            console.log("Tie")
        }
        else if (count > 0) {
            console.log("o")
        }
        else if (maincount > 0) {
            console.log("x")
        }

    }





}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`x o x
    o x o
    o x x`);
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

