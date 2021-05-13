
function getaverage() {

    var seventh = document.getElementById("num1").value
    var eight = document.getElementById("num2").value
    var nine = document.getElementById("num3").value
    var tenth = document.getElementById("num4").value

    var a = parseInt(seventh)
    var b = parseInt(eight)
    var c = parseInt(nine)
    var d = parseInt(tenth)

    function average() {
        return function one(seventh) {
            return function two(eight) {
                return function three(nine) {
                    return function fourth(tenth) {
                        return "Average 0f class [7-10]:" + " " + (seventh + eight + nine + tenth) / 4 + "%";

                    }
                }
            }
        }
    }




    // console.log(typeof(a))

    console.log(average()(a)(b)(c)(d))

}
