var a = [1, 4, 2, 3, 5, 6];

var count = 0;

var sum = 0;

for( var i = 0; i < a.length; i++){
    if(a[i] % 2 ==0){
        count = count + a[i];
        count++;
    } else {
        sum = sum + a[i];
        sum++;
    }
}