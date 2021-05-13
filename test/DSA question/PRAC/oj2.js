function runProgram(input) {

    var input = input.trim()
    var a = input[4].split(" ").map(Number)

    console.log(a)
  


    

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`3
    1
    1
    2
    1 101
    2
    1 200`);
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