function runProgram(input) {

    input = input.trim().split("\n")


    var [size, k] = input[0].trim().split(" ").map(Number)

    var arr = input[1].trim().split("")

 
    var res = 0
    for(var i = 0; i <= size-k; i++){
        var sum = ""
        for(var j = i; j <= i+k-1;j++){

        
            sum = sum + arr[j]

           
        }
       if(sum[0] !== sum[1]){
           res++
       }
       else{
           res = 0
       }
    }

    console.log(res)

  
  
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`4 2
    abcc`);
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

