
function runProgram(input) {
  
    var input = input.split("\n")

    var testcase = Number(input[0])


    var line  = 1 

    for(var i = 0;i < testcase; i++) {

        var[row,target] = input[line++].trim().split(" ")
      
        var arr = input[line++].trim().split(" ").map(Number)

        sum(arr,target)
        
    }

    function sum(arr,target){

        for(var i = 0; i < arr.length; i++){
            for(var j = i+1; j < arr.length; j++){

                if(arr[i] + arr[j] == target){
                    console.log(i,j)
                    return
              
                }
            }
        }
        console.log("-1 -1")
       
     
        
    }
  
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`3
        4 9
        2 7 11 15
        5 10
        1 2 3 5 5
        2 100
        48 49`);
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

