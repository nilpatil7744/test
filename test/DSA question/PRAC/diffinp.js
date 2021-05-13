function runProgram(input) {



    var input = input.trim().split("")

    console.log(input)




    for(var i = 0; i < input.length; i++){
        if(obj[input[i]] == undefined){
          
            obj[input[i]] = 1
         

        }
        else {
            obj[input[i]]++
        }
    }


   for(  key in obj ){
    

    console.log(key,obj[key])


   }
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`aaacccbaaddeee`);
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