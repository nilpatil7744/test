
function runProgram(input) {
  
    var input = input.split("\n")

    var testcase = Number(input[0])




    var line  =1 
    for(var i = 0; i < testcase;i++){
        line++

        var arr = input[line].trim().split("")
        line++

        sum(arr)
    }


    function sum(arr){

     
        var count = 0
        for(var i = 0; i < arr.length; i++){
            

            if(arr[i] == '0' ||arr[i] == '1' ||arr[i] == '2' ||arr[i] == '3' ||arr[i] == '4' ||arr[i] == '5' ||arr[i] == '6' ||arr[i] == '7' ||arr[i] == '8' ||arr[i] == '9'){
               
                count++
            }
        
          
        }
        console.log(count)
    }
    
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`2
5
a123b
5
1abc7`);
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

