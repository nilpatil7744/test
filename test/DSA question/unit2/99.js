
function runProgram(input) {
    var input = input.trim()

    var a = input.split(/[\r\n]+/)

    var count = 0
    for (var i = 1; i < a.length; i++) {
        var b = a[i].split(" ")

        for(var j = 0; j < b.length; j++){
            if(a[0] == b[j]){
                console.log(b[j-1])
                count++
            }
        }
    }

    if(count == 0){
        console.log("NULL")
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