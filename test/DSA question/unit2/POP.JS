function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")
    var inp_a = input[0].split(",")
    var n_nil = input[0].split(" ")

    var b = ""

    for(var i = n_nil.length - 1; i >= 0; i--){
        b = b +" " + n_nil[i]
    }
    console.log(b)


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