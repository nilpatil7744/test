function runProgram(input) {

  var input = input.trim().split("\n")

  var a = input[1].trim().split(" ").map(Number)
  // console.log(a)


  var count = 0


  for (var i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1] && a[i + 1] > a[i + 2]) {
      
      
      // console.log(a[i+1])
      count++

    }
    else if (a[0] > a[1] ){
      count++
    }

    else if (a[a.length-1]  > a[a.length-2]){

      count++
    }
    
   
  }








}

if (process.env.USERNAME === "Pratiksha") {
  runProgram(`8
    1 2 3 -4 2 1 6 -5`);
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
