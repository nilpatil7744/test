function runProgram(input) {

  var input = input.trim()

  var count = 0
  for (var i = 0; i < input.length; i++) {

    var arr = ""
    for (var j = i; j < input.length; j++) {

      arr = arr + input[j]
      if(arr[0] == arr[arr.length-1]){
        count++
      }

    }


  }
  console.log(count)

}

if (process.env.USERNAME === "Pratiksha") {
  runProgram(`abcab`);
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