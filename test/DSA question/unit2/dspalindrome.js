function runProgram(input) {

    var input = input.trim()
    var input = input.split(/[\r\n]+/)
    var a = input[0]


    var c = "";


    for (var i = a.length - 1; i >= 0; i--) {

         c = c + a[i]
       
    }


    console.log(a)
    console.log(c)


    if (a == c) {
        console.log("Yes")

    } else {
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