function runProgram(input) {
    input = input.trim();
    var a = [];



    for (var i = 0; i < input.length; i++) {
        var str = "";
        for (var j = i; j < input.length; j++) {

            str = str + input[j]

            var revv = "";
            for (var k = str.length - 1; k >= 0; k--) {
                revv = revv + str[k]


                if(str == revv){
                    a.push(str)
                }



            }
        }
    }

 var long = a[0].length

 for( var i = 0; i < a.length; i++){
     if(a[i].length > long){
         long = a[i].length
     }
 }
 console.log(long)




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