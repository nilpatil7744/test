function runProgram(input) {

    var input = input.trim().split("\n")

    var input22 = input[0].trim().split(" ").map(Number)
    
    var input23 = input[1].trim().split(" ").map(Number)



    if(input22[0] > input23[0]){
        console.log("New Zealand")
    }
    else if(input22[0] < input23[0]){
        console.log("England")
    }
    else if( input22[0] == input23[0]){
        if(input22[1] > input23[1]){
            console.log("New Zealand")
        }
        else if(input22[1] < input23[1]){
            console.log("England")
        }
        else if(input22[2] > input23[2]){
            console.log("New Zealand")
        }
        else{
            console.log("England")
        }
      
    }





   
  

    

}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`120 90 70
    90 80 110`);
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