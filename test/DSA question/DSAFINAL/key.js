function runProgram(input) {

    var input = input.trim().split("\n")

    for(var i = 0; i < input.length; i++){


        input[i]= input[i].trim().split(" ")

        // console.log(input[i])
    
    }


    var obj = []


    for(var i = 1; i <= input[0]; i++){

        if(obj[input[i]]){
            obj[input[i]] = obj[input[i]] + 1
        }
        else{
            obj[input[i]]= 1
        }
    }
    
    Object.keys(obj)
    .sort()
    .forEach(function(v,i){
        console.log(v,obj[v])
    })
  
  

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`4
    prateek
    nrupul
    yogesh
    prateek`);
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