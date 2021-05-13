
function runProgram(input) {

    var input = input.split("\n")

    var [size, k] = input[0].trim().split(" ").map(Number)

    var arr = input[1].trim().split(" ").map(Number)


    var res = 0
    var arr22 = []
    for (var i = 0; i <= size - k; i++) {
        var sum = ""

   
        for (var j = i; j <= i + k - 1; j++) {
            sum = sum + arr[j]

            if (sum % k != 0) {

                arr22.push(sum)
            }

        }
       


    }

  


    var result = [Math.max(...arr22)]


   if(result.length > 0){
       console.log(result.length)
   }else{
       console.log(0)
   }






}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`4 3
    2 3 4 6
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

