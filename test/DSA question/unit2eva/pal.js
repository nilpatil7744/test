var a = "hannah";

for(var i = 0; i < a.length / 2 ; i++){

    if(a[i] !== a[a.length - 1 - i])   {
    console.log("not palindrome")
    break;
    }
    console.log("palindrome");
    break;
}