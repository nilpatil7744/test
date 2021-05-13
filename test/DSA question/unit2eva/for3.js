var num = "There is a smallest natural number";

var count = 0;

for(var i = 0; i < num.length; i++){
    if(num[i] == " "){
        count = count - 1;
    } 
    console.log(count);
}
    