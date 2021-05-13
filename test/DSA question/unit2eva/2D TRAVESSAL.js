// Spiral Traversal (Rectangular Matrix)
// Description

// You are given a matrix of size N x M.

// Print the spiral traversal of the matrix.

// Refer the image given below, for better understanding.

// Screenshot (116).png


// 1
// 4 3
// 4 5 6
// 3 12 7
// 2 11 8
// 1 10 9


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N and M, the number of rows and columns in the given matrix.

// The next N lines contain M values each denoting the elements of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N, M <= 200

// 1 <= A[i][j] <= 200


// Output
// For each test case, print the spiral traversal of the matrix, on a single line, on a new line.



function runProgram(input) {

    var input = input.split("\n")

    var testcase = Number(input[0])

    var line = 1
    for (var i = 0; i < testcase; i++) {
        var [row, col] = input[line++].trim().split(" ").map(Number)


        var arr = []
        for (var j = 0; j < row; j++) {
            arr.push(input[line++].trim().split(" ").map(Number))
        }

        var top = 0

        var bottom = row - 1

        var right = col - 1

        var left = 0

        var arr2 = ""

        let count = 0

        while (left <= right && top <= bottom) {

            for (var p = top; p <= bottom && count <= (row*col); p++) {

                arr2 += arr[p][left] + " "

                count++


            }
            left++

            for (var p = left; p <= right && count <= (row*col); p++) {

                arr2 += arr[bottom][p] + " "
                count++

            }


            bottom--
            for (var p = bottom; p >= top && count <= (row*col); p--) {
                arr2 += arr[p][right] + " "
                count++
            }

            right--
            for (var p = right; p >= left && count <= (row*col); p--) {
                arr2 += arr[top][p] + " "
                count++

            }

            top++
        }

        console.log(arr2)




    }



}


if (process.env.USERNAME === "Pratiksha") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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

