function runProgram(input) {

    var input = input.trim()
    var input = input.split("\n")
 

    for (var i = 0; i < input.length; i++) {

        input[i] = input[i].trim().split(" ").map(Number)
        
    }


    // console.log(input)
    var m = 0
    
    for(var i = 1; i < input.length; i++){
       
        for(var j = 0; j < input[i].length; j++){
          
            if(input[i][j] % 6 == 0 || input[i][j] % 3 == 0 ){
                // console.log(input[i][j])
                m += (input[i][j])
            }

       
        }
    
    }

    console.log(m)




    // for(var i = 1; i < input.length; i++){
    //     for(var j = 0; j < input[i].length; j++){

    //         if(input[0][j] % 6 == 0 && input[0][j] % 3 == 0){
    //             console.log(input[i][j])

    //         }

            

    //     }

      
    // }

   




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