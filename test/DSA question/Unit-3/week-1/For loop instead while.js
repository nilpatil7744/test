
function runProgram(input) {

    var input = input.split("\n")

    var testcase = Number(input[0])


    var line = 1

    for (var i = 0; i < testcase; i++) {
        var [size, target] = input[line++].trim().split(" ").map(Number)




        var arr = input[line++].trim().split(" ").map(Number)

        sum(arr, target)

    }



    function sum(arr, target) {


        var sum = 0
        for (var i = 0; i < arr.length; i++) {


            for (var j = i; j < arr.length; j++) {
                sum = sum + arr[j]

                if (sum == target) {
                    console.log("Yes")
                    return

                }
                else if (sum > target) {
                    break;

                }
                sum = 0
            }


        }
        console.log("No")


    }



}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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

