function runProgram(input) {

    var input = input.trim()


    var nilo = []
    for (var i = 0; i < input.length; i++) {
        var arr = ""
        for (var j = i; j < input.length; j++) {
            arr = arr + input[j]

            // console.log(arr)

        }

        var revv = ""
        for (var p = 0; p < arr.length; p++) {

            revv = revv + arr[p]


            if (revv[p] == 'a') {
                console.log(revv[p])
            }


        }


        
    }


  






}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`dangerouscovid`);
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