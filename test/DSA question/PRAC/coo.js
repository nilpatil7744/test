function runProgram(input) {

    var input = input.trim()
    var input = input.split(/[\r\n]+/)
    var test = +input[0]


    console.log(input)


    // for (var i = 0; i <= input1; i++) {

    //     for (var j = 0; j < input3.length; j++) {

    //         for(var k = i; k < 3; k++){

    //             console.log(j,k)
    //         }

    //     }
    // }
    // for (var i = 0; i <= input1; i++) {


    //     for (var j = 0; j < input5.length; j++) {

    //         if (input5[j] % 2 == 0 && input5[j + 1] % 2 == 0 && input5[j + 2] % 2 == 0) {

    //             console.log("yes")

    //         } else {
    //             console.log("no")
    //         }

    //     }



    // }
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


