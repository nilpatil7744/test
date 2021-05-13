function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {

        input[i] = input[i].trim().split(" ").map(Number)

    }
    var [row, col, target] = input[0]

    input.shift()

    var sum = 0


    for(var i = 0; i < row; i++){
      
        for(var j = 0; j < col; j++){
            if (input[i][j] % 3 == 0 && input[i][j] != 0 && input[i][j] != 1) {

                sum = sum + (input[i][j])
                
            }
        }
    }
    console.log(sum)
   
    

     
 


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