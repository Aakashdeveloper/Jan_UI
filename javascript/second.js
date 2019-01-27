var a = 10
undefined
var b = 20
undefined
a>10
false
a<10
false
a==10
true
a>b
false
a<b
true
a==10 || a==20
true
a==10 && a==20
false
a!==10
false
a!==20
true


var a = "tajmahal"
undefined
a.lenght;
undefined
a.length;
8
a.toUpperCase()
"TAJMAHAL"
var b = a.toUpperCase()
undefined
b
"TAJMAHAL"
b.toLowerCase()
"tajmahal"
a[0]
"t"
a[5]
"h"
a[8]
undefined
var mystr= "i am doing javascript"
undefined
mystr.replace("javascript","React")
"i am doing React"
var a = "    hi"
undefined
a.length()
VM555:1 Uncaught TypeError: a.length is not a function
    at <anonymous>:1:3
(anonymous) @ VM555:1
a.length
6
a.trim()
"hi"
var a = "    hi .  "
undefined
a.trim()
"hi ."
var a = "tajmahal"
undefined
a.split(" ")
["tajmahal"]0: "tajmahal"length: 1__proto__: Array(0)
a.split(",")
["tajmahal"]0: "tajmahal"length: 1__proto__: Array(0)
var name = "tajmahal"
undefined
name.split(",")
["tajmahal"]0: "tajmahal"length: 1__proto__: Array(0)
var a = "i am at tajmahal"
undefined
name.split(",")
["tajmahal"]0: "tajmahal"length: 1__proto__: Array(0)
a
"i am at tajmahal"
a.split(",")
["i am at tajmahal"]0: "i am at tajmahal"length: 1__proto__: Array(0)
var name="john"
undefined
name.charAt(0)
"j"
name.slice(1)
"ohn"
name.slice(2)
"hn"
name.slice(5)
""
name.slice(5)
""
name.slice(1)
"ohn"
name.charAt(0).toUpperCase()+name.slice(1)
"John"
//////////////
var a =10
var b = "my age is "+a
my age is 10

`my age is ${a}`






