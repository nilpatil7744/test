function runProgram(input) {

    var input = input.trim().split("")

    var nil = Math.floor((input.length)/ 2)

   

    var obj1 = ""

    var obj2 = ""

    var obj3 = ""


    if(input.length % 2 == 0){
        
        for(var i = nil-1; i >= 0; i--){
           
            obj1 = obj1 + input[i]
        }
        for(var i = input.length-1; i >= nil; i--){
          
            obj1 = obj1 + input[i]
        }

    

    }
    else{

        for(var i = nil; i >= 0; i--){
            console.log(i)
        
            obj2 = obj2 + input[i]
        }
        for(var i = input.length-1; i > nil; i--){
           
            obj3 = obj3 + input[i]
        }


        console.log(obj2 + input[nil]+ obj3)


    }

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`jsdfnsgnlewnl`);
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