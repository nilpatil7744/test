
        var arr = []

        for(var i = 25; i < 30; i++ ){

            arr.push(i)

        }

        console.log(arr)



        var arra2 = arr.map(function (el){
            return el * 2 ;

        })

        console.log(arra2)




    ///// SIMPLE FUNCTION WITH MAP, FILTER, REDUCE...

        var filterarra = arra2.filter(function(el){
            return el > 35;
        })
        console.log(filterarra)

        var reduce1 = filterarra.reduce(function(toatal,el){
            return toatal + el;
        })
        console.log(reduce1)

    ///// ARROW FUNCTION WITH MAP, FILTER, REDUCE...


        var arra3 = arr.map((el) => {
            return el * 2;
        })

        console.log(arra3)

        var filterarra2 = arra3.filter((el) => {
            return el > 35;
        })

        console.log(filterarra2)

        var reduce2 = filterarra2.reduce((total,el) => {
            return total + el;
        })

        console.log(reduce2)