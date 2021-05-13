function runProgram(input) {

    var input = input.trim()
    var input = input.split(/[\r\n]+/)
    var a = input[0].split(" ").map(Number)
    var c = input[1].split(" ").map(Number)


    var min = c[0]


    for(var i = 0; i < c.length; i++){
        if(c[i] % 7 == 0 ){
            if(c[i] < min){
                min = c[i];
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