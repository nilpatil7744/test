function runProgram(input) {

    var input = input.trim().split("\n")



    for(var i = 0; i < input.length; i++){
        input[i] = input[i].trim().split("")

    }


    for(var i = 2; i < input.length; i = i+2){


        // var arr = ""
        // for(var j = 0; j < input[i].length; j++){
        
        //     if(input[i][0] = 'a' && input[i][j] == 2){
        //         input[i][j] = 'a'
        //         arr += input[i][j]
        //     }
        //     else if (input[i][j] == 1){
        //         input[i][j] = 'c'
        //         arr += input[i][j]
        //     }
        //     else{
        //         arr += input[i][j]
        //     }
          
            
        // }
        // console.log(arr)


        for(var j = 0; j < input[i].length; j++){
            var nil = Math.floor(input[i].length/2)
              
        }
       
        

    
    }
   
    

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`2
    6
    a2b1c2
    6
    a2z1a2`);
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