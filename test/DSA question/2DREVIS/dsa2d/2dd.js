
function runProgram(input) {
   
    var input = input.split("\n")


    var testcase = Number(input[0])



    var line = 1

    for(var i = 0; i < testcase; i++){
        line++
    
    
        var arr = input[line].trim().split("")
        line++

sum(arr)
    
       
    }

    function sum(arr){

        var newarr = ""
        var newarr2 = ""
    
        for(var i = arr.length-1; i >= 0; i--){
            if(arr[i] == 'a' || arr[i] == 'e' ||arr[i] == 'i' ||arr[i] == 'u' ){
                newarr += arr[i]

            }
            else{
                newarr2 += arr[i]
            }
            
        }

        console.log(newarr+newarr2)
    }
 
  
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`2
    6
    rutwik
    6
    rutwik`);
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

