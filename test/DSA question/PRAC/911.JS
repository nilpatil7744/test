function runProgram(input) {

    var input = input.trim()

    console.log(input)




    for (var i = 0; i < input.length; i++) {

        var str = ""
        
    var arr2 = []
        for (var j = i; j < input.length; j++) {

            str = str + input[j]
            arr2.push(str)
            console.log(arr2)

        }
    
    
       

    }

    var vow = "aiou"
   





}

if (process.env.USERNAME === "Pratiksha") {
    runProgram(`dangerouscovid`);
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