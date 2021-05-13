function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")
    var inp_a = input[0].split(" ").map(Number);
  


    for (var j = 1; j <= inp_a; j++) {

        for (var i = 1; i <= input[j]; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                    console.log("FizzBuzz")
            } else if (i % 5 == 0) {
                console.log("Buzz")

            } else if (i % 3 == 0) {
                console.log("Fizz")
            } else {
                console.log(i)
            }

         
        }
    }




}



process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});