function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")


    for (var i = 0; i < input.length; i++) {

        input[i] = input[i].trim().split(" ").map(Number)

    }
    var [row, col, target] = input[0]

    input.shift()

    var count = 0

    // for (var i = 0; i < row; i++) {
    //     for (var j = 0; j < 4; j++) {



    //         if (input[i][j] + input[i][j+1] + input[i][j+2] == target) {
                
               
    //             count++
    //         }
    //     }
    // }
  

  

    // for (var i = 0; i < row-2; i++) {
     
        
    //     for (var j = 0; j < col; j++) {

    //         console.log(i)

    //         if(input[i][j]+input[i+1][j]+input[i+2][j] == target){
            
              
    //             count++
                
    //         }
            

         
    //     }
    // }

    
    
 

    for (var i = 0; i < row-2; i++) {
        for (var j = 0; j < col-2; j++) {
            if (input[i][j] + input[i+1][j + 1] + input[i+2][j + 2] == target) {
                count++

            }
        }
    }


   
 
    for (var i = row-1; i > 1; i--) {
        for (var j = 0; j < col-2; j++) {
            if (input[i][j] + input[i-1][j + 1] + input[i-2][j + 2] == target) {
               
                count++

            }
        }
    }  
    console.log(count)


}


process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});