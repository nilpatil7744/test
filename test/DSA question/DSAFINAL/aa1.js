function runProgram(input) {

    var input = input.trim().split(" ").map(Number)

    var input22 = input[0]
    var input23 = input[1]
    var input24 = input[2]

    var count = 0

    // for(var i = input22; i <= input23; i++){
    //     if(i % input24 == 0){
    //         ++count
    //     }
    // }
    // console.log(count)


    while(input22 <= input23 ){
        if(input22 % input24 == 0){
            ++count
        }
        input22++
    }
    console.log(count)





   
  

    

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`1 10 1`);
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