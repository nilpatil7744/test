
function runProgram(input) {
  
    var input = input.split("\n")

    var testcase = Number(input[0])


    var line  = 1 
    for(var i = 0;i < testcase; i++) {

        var[row,target] = input[line++].trim().split(" ")
      
        var arr = input[line++].trim().split(" ").map(Number)
      
        sum(arr,row,target)
        
    }
  
  

  

    function sum(arr,row,target){
  
        var count = 0

        for(var i = 0; i < arr.length; i++){
           
            var str = []
            for(var k = i; k < arr.length; k++){

                str.push(arr[k])
                for(var j = 0; j < str.length; j++){
               

                    if(str[j] + str [j+1] + str[j+2] + str[j+3] == target || str[j] == target){

                        count++
                        
                    }
                }
             
              
            }
           
            
        }

    
        if(count >= 1){
            console.log("Yes")


        }else{
            console.log("No")

        }
     

        
    }

 

  

  
    
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`10
    7 14
    3 5 4 2 2 1 1
    8 14
    1 7 4 3 2 1 5 6
    2 1
    3 1
    7 1
    1 1 1 1 1 1 1
    2 1
    1 1
    10 2
    2 6 3 3 4 1 1 5 2 4
    3 6
    9 6 4
    7 6
    3 9 6 1 7 8 10
    1 6
    3
    1 1
    3
    `);
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

