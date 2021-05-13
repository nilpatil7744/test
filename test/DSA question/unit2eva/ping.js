
function runProgram(input) {

    var input = input.split("\n")

    var testcase = Number(input[0])

    var line = 1
    for (var i = 0; i < testcase; i++) {
        line++

        var arr = input[line].trim().split("")
        line++

        sum(arr)
    }

    function sum(arr) {

        var obj = {}

        for (var i = 0; i < arr.length - 3; i++) {



            if (obj[arr[i]] == undefined) {

                obj[arr[i]] = 1


            }
            else {
                obj[arr[i]]++
            }

        }
        for (Key in obj) {
            console.log(obj[Key])
        }
    }

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`2
    7
    pingpingpin
    8
    pingpingpingpingp`);
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

