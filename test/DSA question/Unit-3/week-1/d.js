
function runProgram(input) {

    var input = input.split("\n")

    var testcase = Number(input[0])
    var line = 1
    for (var i = 0; i < testcase; i++) {
        var size = input[line++]

        var arr = []
        for (var i = 0; i < size; i++) {
            arr.push(input[line++].trim().split(" ").map(Number))
        }

        var left = 0

        var bottom =size- 1

        var right =size- 1

        var top = 0

        var arr2 = ""


        for (var i = bottom; i >= left; i--) {

            arr2 += arr[i][left] + " "

        }
        left++

        for (var i = left; i <= right; i++) {
            arr2 += arr[top][i] + " "
        }
        top++
        for (var i = top; i <= bottom; i++) {
            arr2 += arr[i][right] + " "
        }
        right--
        for (var i = right; i >= left; i--) {
            arr2 += arr[bottom][i] + " "
        }
        console.log(arr2)
    }






}


if (process.env.USERNAME === "Pratiksha") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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

