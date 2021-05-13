function runProgram(input) {

    var input = input.trim().split(" ").map(Number)

   

    var m = input[0]

    var n = input[1]

    var count = 0

    for(var i = 0; i <= m; i++){
      for(var j = 0; j <= n; j++){
        if(i ** 2  + j ==  m && j ** 2 + i == n){
       
            count++
        }
      }
    }

    console.log(count)

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`9 3`);
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