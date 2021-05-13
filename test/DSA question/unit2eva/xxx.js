var a = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];
var count = 0;

for( var i = 0; i < a.length; i++){
    count =  a[i];
    if(count.length >= 4){

        a.pop()
        console.log(count)
    }

}
console.log(count)
