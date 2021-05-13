//Write a function to create a copy of an object without changing original object.


var a = {
    name: "nil",
    Age: 24,
    gender: "male"

}
console.log(  a  )

function copy(a) {
    var b = a

    console.log( b )
}


copy(a)




var arr = [2,3,4,7,8]

//Do the same with the array.

function copyarr(){

    var forma = []

    for(var i = 0; i < arr.length; i++) {

        forma.push(arr[i])
    }

    console.log(forma);
    
}

copyarr()

