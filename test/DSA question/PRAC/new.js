function runProgram(input) {

    var input = input.trim()

    var input = input.split("\n")

    var bb = input[0].trim().split(" ").map(Number)
    input.shift()



    var count =0


    for (var i = 0; i < input.length; i++) {
        if (i % 2 == 1 ){

            var nilo = input[i].split(" ").map(Number)
  
            for(var j = 0; j < nilo.length-2; j++ ){
                if(nilo[j] % 2 == 0 && nilo[j+1] % 2 == 0 && nilo[j+2] % 2 == 0){
                    console.log("YES")
                    break
                    
                } else if(nilo.length-3 == j){
                    console.log("No")

                }
            }

        }
       

    }

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