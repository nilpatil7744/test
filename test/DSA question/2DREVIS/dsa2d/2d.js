
function runProgram(input) {
   
    var input = input.split("\n")


    var testcase = Number(input[0])



    var line = 1

    for(var i = 0; i < testcase; i++){
        var [size, col]= input[line++].trim().split(" ").map(Number)
        console.log(size,col)

  
    
        var arr = []

        for(var j = 0; j < size; j++){
            arr.push(input[line++].trim().split(" ").map(Number))

        
        }
        // console.log(arr)

        var row = arr.length
     

        for(var i = size-1; i >= 0;i--){

            var newarr = ""
            for(var j = size-1; j >= 0;j--){
    
                newarr += arr[i][j] + " "
    
            }
            // console.log(newarr)
        }

        
    }
 
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`1
    3 3
    1 2 3
    4 5 6
    7 8 9
    1
    3 3
    1 2 3
    4 5 6
    7 8 9`);
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

