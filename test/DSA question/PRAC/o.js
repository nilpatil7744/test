function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {

        input[i] = input[i].trim().split(" ")

    }

    console.log(input)
    



    var count = 0
    var count2 = 0
    var count3 = 0
    var count4 = 0
    var count5 = 0
    var count6 = 0
    var count7 = 0
    var count8 = 0


    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length; j++) {

            if (input[i][j]== "o" && input[i][j+1]== "o" && input[i][j+2] == "o" ) {
                count++
            }
            else if (input[i][j]== "x" && input[i][j+1]== "x" && input[i][j+2] == "x") {
                count2++
            }
        }
    }


    
    for (var i = 0; i < input.length-2; i++) {
        for (var j = 0; j < input.length; j++) {

            if (input[i][j]== "o" && input[i +1][j]== "o" && input[i+2][j] == "o" ) {
                count3++
            }
            else if (input[i][j]== "x" && input[i+1][j]== "x" && input[i+2][j] == "x") {
                count4++
            }
        }
    }


    for (var i = 0; i < input.length-2; i++) {
        for (var j = 0; j < input.length-2; j++) {

            if (input[i][j]== "o" && input[i +1][j+1]== "o" && input[i+2][j+2] == "o" ) {
                count5++
            }
            else if (input[i][j]== "x" && input[i+1][j+1]== "x" && input[i+2][j+2] == "x") {
                count6++
            }
        }
    }


     for (var i = input.length-1; i > 1; i--) {
        for (var j = 0; j < input.length-2; j++) {
            if (input[i][j]== "o" && input[i-1][j+1]== "o" && input[i-2][j+2] == "o" ) {
                count7++
            }
            else if (input[i][j]== "x" && input[i-1][j+1]== "x" && input[i-2][j+2] == "x") {
                count8++
            }
        }
    }  

    if (count == 1) {
        console.log("o")
        
    }else if (count2 == 1) {
        console.log("x")
        
    }else if (count3 == 1) {
        console.log("o")
        
    }else if (count4 == 1) {
        console.log("x")
        
    }else if (count5 == 1) {
        console.log("o")
        
    }else if (count6 == 1) {
        console.log("x")
        
    }else if (count7 == 1) {
        console.log("o")
        
    }else if (count8 == 1) {
        console.log("x")
        
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