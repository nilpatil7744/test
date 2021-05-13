function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")


    for (var i = 1; i < input.length; i++) {

        input[i] = input[i].trim().split(" ")



    }

    [row, col] = input[0].trim().split(" ").map(Number)

    

    input.shift()


    var newaa = ""

    for (var i = 0; i < row; i++) {

        if (i % 2 == 0) {
            for (var j = col-1; j >= 0; j--) {


                newaa += input[i][j] + " "




            }
        }
        else  {

            for(var j = 0; j < col; j++){
                newaa += input[i][j] + " "
            }
        }
    }

    console.log(newaa)






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