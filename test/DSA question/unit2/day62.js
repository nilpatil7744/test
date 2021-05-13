
/// with recverse


var arr = "masai";
var arra1 = arr.split("");

var hh = arra1.reverse();
console.log(hh)



// second part own reverse function for every string...////

function Task(input){
    this.input = input;
}

Task.prototype.reversestr = function () {
    var input = "masai"


    var p = ""


    for (var i = input.length - 1; i >= 0; i--) {
        p = p + input[i]
    }
    console.log(p)

}

var Tak22 = new Task("masai")

Tak22.reversestr();

