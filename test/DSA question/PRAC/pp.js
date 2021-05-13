function runProgram(input) {

    var input = input.trim()
    var input = input.split(" ")
    var input1 = +input[0]  
    var input2 = +input[1]  


    var nil = ""

    for(var i = 0; i < input2; i++){
        nil = nil + "#"
    }


   

    var nil2 = ""

    for(var i = 0; i < input2 - 1; i++){
        nil2 = nil2 + "."
    }


    var nil3 = nil2 + "#"

    var nil4 = "#" + nil2

    var count = 0


    for(var i = 0; i < input1; i++){
        if (i % 2 == 0) {
            console.log(nil)
            
        }
        else if (count % 2 == 0) {
            console.log(nil3)
            count++
            
        }
        else if (count % 2 == 1) {

            console.log(nil4)
            count++
            
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
