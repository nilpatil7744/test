function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")
    var inp_a = input[0].split(" ").map(Number);
    var b = input[1].split(" ").map(Number);
    var c = input[2].split(" ").map(Number);
  


    for (var i = 0; i < b.length; i++) {

        for (var j = 0; j < c.length ; j++) {
            if(b[i] == c[j]){
                console.log(b[i])

               
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