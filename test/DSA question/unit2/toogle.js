function Task(title) {
    this.title = title
    this.status = false
    this.created_date = new Date()

}




// var task1 = new Task("buy milk");

// console.log(task1)


var nil = {

    Name: "kok",
    Age: 24
    
}

function showname(x) {
    this.Name = x
}
    


var x = showname.bind(nil,"buymilk")

x()


console.log(nil)








// function Task(title) {
//     this.title = title
//     this.status = false
//     this.created_date = new Date()

//     this.toogle = function (){

//         this.status = !this.status

//     }

// }

// var task1 = new Task("buy milk"); 

// console.log(task1)

// task1.toogle();

// console.log(task1)
















