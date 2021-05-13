function runProgram(input){
   
    var input = input.trim()
 
    
    var input = input.split("\n")
    var inp_a = input[0]


    if(inp_a % 35 == 0){
        console.log("Masai School")
    }else if(inp_a % 5 == 0){
        console.log("School")
    } else if(inp_a % 7 == 0){
        console.log("Masai")
    }else {
        console.log("Hurray!")
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