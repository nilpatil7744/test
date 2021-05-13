function runProgram(input) {

    var input = input.trim()
    var input = input.split(/[\r\n]+/)
    var a = input[0].split(" ").map(Number)
    var c = input[1].split(" ").map(Number)

    var lund = []
    var k = 0


    for (var i = 0; i < c.length; i++) {
       if(i == i){
           
            for(var j = 0; j < c.length;j++){
                if(c[j] != c[i]){
                k = k + c[j]
                }
               
               
            }
            if(k % 7 == 0){
                lund.push(k)

            }
            console.log(lund)
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




// var v = ""
//         for (var j = i + 1; j < c.length; j++) {

//             v = v + c[j]
   
//         }
//         var total = v[0]

//         var mom = []


//         for(var h = 1; h < v.length; h++){

//             total = total + v[h]
//             mom.push(total)
    
