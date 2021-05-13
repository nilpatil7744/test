function runProgram(input) {

    var input = input.trim()
    var input = input.split("/[\r\n]+/")
    
    var b = input[0].split(" ").map(Number);

    var count = 0;


    var sum = []

    var num = []

    for(var i = 0; i <= b[0]; i++){
        for(var j = 0; j <= b[1]; j++){
          
            if( ((j ** 2)+(i) == b[0] && (i ** 2)+(j) == b[1])){
                // console.log(i,j)
                count++
            }
          
        }
    }
    console.log(count)

 
       
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