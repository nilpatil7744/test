
function runProgram(input) {

    var input = input.split("\n")

    var testcase = Number( input[0])

    var line = 1

    for(var i = 0; i  <testcase; i++){
        var[size,k] = input[line++].trim().split(" ").map(Number)


        var arr = input[line++].trim().split(" ").map(Number)

        sum(arr,size,k)
    }


    function sum(arr,size,k){
        console.log(arr)

        for(var i = 0; i < arr.length;i++){
            var sum = ""
            for(var j = 0; j  <arr.length; j++){

                sum = sum+arr[j]
      

            }
            console.log(sum)
        }


    }

   






}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`3
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1
    `);
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

