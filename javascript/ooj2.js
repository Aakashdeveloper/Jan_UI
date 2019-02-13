var car = new Object()

var car = new Object()
undefined
car
{}
typeof(car)
"object"
car.color="red"
"red"
car.price ="$2890"
"$2890"
car.brand ="bmw"
"bmw"
car
{color: "red", price: "$2890", brand: "bmw"}

car.color
car['color']

delete car.price

var bob = new Object();
bob.age = 10
bob.color="white"
bob.setAge = function (newAge,color){
    bob.age = newAge;
    bob.color = color;
}

var tony = new Object();
tony.age = 20;
tony.color="black"
tony.setAge = function(newAge,color){
    tony.age = newAge;
    tony.color = color;
}

var creatAge = function(newAge,color){
    this.age = newAge
    this.color = color
}


var bob = new Object();
bob.age = 10
bob.color="white"
bob.setAge = creatAge;

var tony = new Object();
tony.age = 20;
tony.color="black"
tony.setAge = creatAge



function age(newAge){
    console.log(newAge)
}

age(10)

var database = {
    add:function(a,b){return a+b},
    sub:function(a,b){return a-b}
}


var sum = new database()
sum.add(1,2)

function database(){
    this.add= function(a,b){return a+b},
    this.sub = function(a,b){return a-b}
    this.addDtabase = function(table,name){
        console.log(`select * from ${table} where name = ${name}`)
    }
}

var sum = new database()
sum.add(1,2)



var random = new database();
random.addDtabase('student', 'john')

Math.random()