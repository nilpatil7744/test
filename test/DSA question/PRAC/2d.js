function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {

        input[i] = input[i].trim().split(" ").map(Number)

    }
    var [row, col] = input[0]

    input.shift()
   
  
   
   
    for(var i = 0; i < col; i++){
        var newArray = "";
        for(var j = 0; j < row; j++){
        newArray += (input[j][i]) + " "
        };
        console.log(newArray)
    };




}
// 3 2
// 5 2
// 9 10
// 0 -4

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