function runProgram(input) {

  var input = input.trim().split("\n")

  var input2 = input[1].trim().split(" ").map(Number)


  console.log(input2)

  var maxcount = 0

  var count = 0

  for (var i = 0; i < input2.length; i++) {
    var counter = 0
    for (var j = i + 1; j < input2.length; j++) {
      if (input2[i] == input2[j]) {
        counter++
      }

    }
    if (maxcount < counter) {
      maxcount = counter
      count = input2[i]

    }

  }

  console.log(count)


}

if (process.env.USERNAME === "Pratiksha") {
  runProgram(`5
    0 2 2 6 2`);
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