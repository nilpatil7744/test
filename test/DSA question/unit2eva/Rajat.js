/////   O(n^2) for every testcase

function runProgram(input) {
  
    var input = input.split("")


    console.log(input)

    var arr = []   
    for(var i = 0; i < input.length;i++){ 
     
        if(Number(input[i])){
            for(var j = 0; j < input[i];j++){
               arr.push(input[i-1]) 
            }
            
        }
       

    }
    console.log(arr.join(""))

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`a3b2`);
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

