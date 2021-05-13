
function runProgram(input) {
  
    var input = input.split("\n")

    var testcase = Number(input[0])


    var line = 1

    for(var i = 0; i < testcase; i++){
        var[size,target] = input[line++].trim().split(" ").map(Number)

        var arr = input[line++].trim().split(" ").map(Number)

        sum(arr,target)
       
    }



    function sum(arr,target){


        arr.sort((a,b)=>a-b)


        var left = 0

        var right = arr.length-1


        while(left < right){
            if(arr[left]+arr[right] == target){
                
                return console.log("Yes");
            }
            else if(arr[left] + arr[right] > target){
                right--
            }
            else{
                left++
            }
      
        }

        return console.log("No")
    }
  

  

  
    
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`1
5 2
3 4 0 2 7`);
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

