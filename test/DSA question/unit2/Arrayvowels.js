

var a;
a = ["nil", "yogesh", "xiz"];


var count;
count = 0;



for (var i = 0; i < a.length; i++) {
    if (a[i].includes("a") || a[i].includes("e") || a[i].includes("i") || a[i].includes("o") || a[i].includes("u")) {

        count++

    }
}

hoistup ()
function hoistup() {
    if (count == a.length) {
        console.log("true")
    } else {
        console.log("false")
    }

}










