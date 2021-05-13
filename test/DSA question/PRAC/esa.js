
function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")


    for (var i = 1; i < input.length; i++) {

        input[i] = input[i].trim().split("")

    }
    var [row, col] = input[0].trim().split(" ").map(Number)

    input.shift()

    var count = 0

    for(var i = 0; i < row; i++){
        for(var j = 0; j < col-3; j++){

            if (input[i][j] == 's') { 
                if (input[i][j+1] == 'a' && input[i][j+2] == 'b' &&input[i][j+3] == 'a') {

                    count++

                }
            }
        }

    }
 
    for(var i = 0; i < row-3; i++){
        for(var j = 0; j < col; j++){

            if (input[i][j] == 's') { 
                if (input[i+1][j] == 'a' && input[i+2][j] == 'b' && input[i+3][j] == 'a') {

                    count++

                }



            }
        }

    }
    
    for(var i = 0; i < row-3; i++){
        for(var j = 0; j < col-3; j++){

            if (input[i][j] == 's') { 
                if (input[i+1][j+1] == 'a' && input[i+2][j+2] == 'b' && input[i+3][j+3] == 'a') {

                    count++

                }



            }
        }

    }
 
    for(var i = row-1; i >= 3; i--){ 
        for(var j = 0; j < col-3; j++){

            if (input[i][j] == 's') { 
                if (input[i-1][j+1] == 'a' && input[i-2][j+2] == 'b' && input[i-3][j+3] == 'a') {

                    count++

                }



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



