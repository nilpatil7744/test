
function runProgram(input) {
    var input = input.trim()
    var input = input.split("\n")
    var inp_a = input[0].split("").map(Number);

    var inp_b = input[0].split(" ").map(Number);


    var count = 0;
    for (var i = 0; i < inp_a.length; i++) {
        if (inp_a[i] == 7 || inp_a[i] == 4) {

            count++
        }
    }

    if (count == inp_a.length) {
        console.log("Yes")
    }else if (inp_b[0] % 7 == 0) {
        console.log("Yes")
    } else if (inp_b[0] % 4 == 0){
        console.log("Yes")
    }else {
        console.log("No")
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