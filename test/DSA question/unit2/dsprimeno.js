function runProgram(input){
   
    var input = input.trim()
    var input = input.split(/[\r\n]+/)
    var a = input[0].split(" ").map(Number)

 
    var limit = a[0];

    for(var i = 2; i <= limit; i++ ){
        var prime = 1;
        for(var j = 2; j < i; j++){
            if(i % j == 0){
                prime = 0;
            }
        }
        if(prime == 1){
            console.log(i);
         
        }else {
            console.log("No")
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
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});