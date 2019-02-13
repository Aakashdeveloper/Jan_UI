let name = "john";

// Literal Notation
let john = {    
            firstName:'John',
            lastname:'Andy', 
            city:'NewYork',
            job:'Software'
        }
    
typeof(john)
"object"
john.firstName
"John"
john.lastname
"Andy"
john['city']
"NewYork"

john.firstName= "kew"
"kew"
john
{firstName: "kew", lastname: "Andy", city: "NewYork", job: "Software"}
delete john.firstName
true
john
{lastname: "Andy", city: "NewYork", job: "Software"}
john.age = 10
10
john
{lastname: "Andy", city: "NewYork", job: "Software", age: 10}



var out = []
out.push({name:"a"})
1
out
[{…}]0: {name: "a"}
out.name
out[0].name


let john = [
    {    
    firstName:'John',
    lastname:'Andy', 
    city:'NewYork',
    job:'Software'
},{
    movie:'John',
    lastname:'Andy', 
    city:'NewYork',
    job:'Software'
}
]
undefined
Object.keys(john)
(4) ["firstName", "lastname", "city", "job"]
Object.keys(john)[0]
"firstName"
var key = Object.keys(john)[0][0]
undefined
john[key]
"John"


let andy = {
    firstName:'',
    lastname:''
}