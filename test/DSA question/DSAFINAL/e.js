function runProgram(input) {

    var input = input.trim().split("\n")

    var a = input[0].trim().split(" ").map(Number)
    var b = input[1].trim().split(" ").map(Number)


    var count = 0

    for(var i =0; i < b.length; i++){
        if(b[i] < 0){

            count++

        }
    }
    console.log(count)


   
  


   
  

    

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`8
    4 5 1 3 5 -9 1 4`);
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