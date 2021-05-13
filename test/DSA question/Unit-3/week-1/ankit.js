
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
    runProgram(`1
    5 2
    3 4 0 2 7
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

