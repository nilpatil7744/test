function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")


    for (var i = 1; i < input.length; i++) {

        input[i] = input[i].trim().split(" ")

        console.log(input[i])

    }

    [row,col] = input[0].trim().split(" ").map(Number)

    console.log(input[0])




   
   


     
 


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