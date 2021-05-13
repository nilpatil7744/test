var limit = 100;

for(var i = 2; i <= limit; i++){
    var prime = true;
    for(var j = 2; j < i; j++){
        if(i % j ==0){
            prime = false;
        
        }
        if(prime == true){
            console.log(i)
        }
    }
}