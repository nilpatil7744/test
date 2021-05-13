
function runProgram(input) {
  
    var input = input.split("\n")


    var arr = input[1].trim().split(" ")

    var count = 0

    var arr2 = []
    for(var i =0; i < arr.length; i++){

      if(arr[i] == '0'){
        // console.log(i + 1)
        //  var sum = i + 1
        //  console.log(sum)

        arr2.push(i+1)


      }
       
    }



    var total = 0
    for(var j= 0; j < arr2.length;j++){

        total += arr2[j]

        
    }



    console.log(total)


  
    
}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`5
    1 0 0 1 1`);
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

