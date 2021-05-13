function runProgram(input) {

    var input = input.trim()
    var input = input.split(/[\r\n]+/)
    var a = input[0]

    var count = 0




    for (var i = 0; i < a.length; i++){

        if(a[i] != 'a' && a[i] != 'e'  && a[i] != 'i'  && a[i] != 'o' &&  a[i] != 'u' ) {

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
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});