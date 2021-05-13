function runProgram(input){
    var input = input.trim()
   
    var input = input.split("\n")
    var a = input[0].split(" ").map(Number);
    var b = input[1].split(" ").map(Number);


    sum = []


    for(var i = 0; i < b.length; i++){
        if(b[i] == 0){
            sum.push(i+1)
        }
    }

    var add = 0 

    for(var j = 0; j < sum.length; j++){
        add = add + sum[j];
    }
   console.log(add)


  
   



           
    
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