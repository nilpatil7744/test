var c = [0, 0, 1 ,0, 0 ,1, 1, 0]

var k = 2 

var main = 100
var count = 0

for(var i = 0; i < c.length; i+=k){

    if(c[i] == 1){

        count = count + 3

    }
    else if(c[i] == 0){
        count++
    }

   

}

var finalcount = main-count



console.log(finalcount)


