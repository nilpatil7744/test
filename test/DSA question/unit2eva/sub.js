
function runProgram(input) {
  
    var input = input.split("\n")

    var testcase = Number(input[0])

    var line  = 1 
    for(var i = 0; i < testcase;i++){
        line++

        var arr = input[line].trim().split("")
        line++

        sum(arr)
    }

    function sum(arr){
        count= 0


        var arr3 = []

        for(var i = 0; i < arr.length; i++){
            var str = ""
            for(var j = i; j < arr.length; j++){
                str = str + arr[j]
                var revv = ""

              
                for(var k = 0; k < str.length; k++){
                    if(str[0] === 'a'){
                        revv = revv + str[k]
                        
                    }
                }
                arr3.push(revv)
               

            }
           
                
        }
      

        var count = 0

        for(var p = 0; p < arr3.length; p++){
           if(arr3[p] != '' ){
          
            count++
           }
        }
        console.log(count)
    }
    
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`1
    4
    aman
    a`);
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

