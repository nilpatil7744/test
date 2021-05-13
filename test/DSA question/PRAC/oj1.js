function runProgram(input) {

    var input = input.trim().split(" ").map(Number)
  

    var inp_a = input[0]

    var inp_b = input[1]



    if(inp_a >= 1 && inp_b <= 100){

        var peri = 2 * (inp_a + inp_b);
    }

    console.log(peri)

    

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`3 6`);
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