function runProgram(input){
    var input = input.trim()
   
    var input = input.split("\n")
    var a = input[0].split(" ").map(Number)
    var b = input[1].split(" ").map(Number)

    var count = 0
    

    for(var i = 0; i < b.length; i++){
        if(b[i] < b[i+1] && b[i+1] > b[i+2]){

           count++

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
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});

