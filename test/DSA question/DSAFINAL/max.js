function runProgram(input) {

    var input = input.trim().split("\n")

    for(var i = 0; i < input.length; i++){


        input[i]= input[i].trim().split(" ").map(Number)
    
    }

    for(var i = 2; i < input.length; i = i+2){
       var max1 = Math.max(...input[i])



       var index = input[i].indexOf(max1)

      
       input[i][index] = -1000000000

       var max2 = Math.max(...input[i])

       var max3 = max1 * max2


       console.log(max3)

    }


    

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`3
    6 
    1 0 7 2 4 0
    5
    1 2 3 4 5
    2
    0 0`);
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