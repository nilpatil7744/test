function runProgram(input){
    var input = input.trim()
   
    var input = input.split("\n")
    var a = input[0]

    console.log(a)

    var b = a - 1;

    var c = 49 - a;

    if(b > c && 1 <= a <= 49){
        console.log("RU Beach")
    }else if (c > b) {
        console.log("RK Beach")
    }else if (b == c){
        console.log("Go Anywhere!")
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