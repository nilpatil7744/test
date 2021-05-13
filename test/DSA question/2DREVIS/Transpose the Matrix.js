
function runProgram(input) {
    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ")

    }

    const [row, col] = input[0]

    input.shift()

    console.log(input)







    for (var i = 0; i < col; i++) {

        var arr = ""
        for (var j = 0; j < row; j++) {


            arr += input[j][i] + " "
          

        }
        console.log(arr)
      


    }




}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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

