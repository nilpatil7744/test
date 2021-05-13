function runProgram(input) {

    var input = input.trim().split("\n")

    var a = input[0].trim().split("")
    var b = input[1].trim().split("")



    for(var i = 0; i < b.length; i++){
        if(b[i] != a[i]){
            console.log(a[i])
        }
    }



   
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`ABCX
    ABCD`);
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