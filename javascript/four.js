var name = [ "aa", "df", "fv", "fg"]
var marks = [1,3,45,6,7,45]
var right = [ true, false , true]

var myarry= [ 1,2,3,"34t","t", true, 34, "g", "gE", 5,5]

var fruits = ["apple", "mango", "banana"]


var fruits = ["apple", "mango", "banana"]
undefined
typeof(fruits)
"object"
fruits[0]
"apple"
fruits[1]
"mango"
fruits[3]
undefined
fruits.push("papaya")
4
fruits
(4) ["apple", "mango", "banana", "papaya"]
fruits.pop()
"papaya"
fruits
(3) ["apple", "mango", "banana"]
fruits.pop(1)
"banana"
fruits.shift()
"apple"
fruits
["mango"]
fruits.unshift("orange")
2
fruits
(2) ["orange", "mango"]



push == unshift
pop == shifr


const a = [1,2,3,5,6]
undefined
a.push(4)
6
a
(6) [1, 2, 3, 5, 6, 4]
var city = ["london", "newyork", "delhi"]
undefined
city.splice(2,0, "amsterdam","helsinki")
[]
city
(5) ["london", "newyork", "amsterdam", "helsinki", "delhi"]
city.splice(2,1, "venice","sydeny")
["amsterdam"]
city
(6) ["london", "newyork", "venice", "sydeny", "helsinki", "delhi"]0: "london"1: "newyork"2: "venice"3: "sydeny"4: "helsinki"5: "delhi"length: 6__proto__: Array(0)
city.splice(2,3, "davos","mumbai")
(3) ["venice", "sydeny", "helsinki"]
city
(5) ["london", "newyork", "davos", "mumbai", "delhi"]


var color = ["red","yellow","green","orange","blue"]
undefined
color.slice(1)
(4) ["yellow", "green", "orange", "blue"]0: "yellow"1: "green"2: "orange"3: "blue"length: 4__proto__: Array(0)
color.slice(2,4)
(2) ["green", "orange"]
color
(5) ["red", "yellow", "green", "orange", "blue"]
color.sort()
(5) ["blue", "green", "orange", "red", "yellow"]
color.reverse()
(5) ["yellow", "red", "orange", "green", "blue"]
color.indexOf(1)
-1
color.indexOf("red")
1
color.indexOf("blue")
4
color.indexOf("purple")
-1
city
(5) ["london", "newyork", "davos", "mumbai", "delhi"]
color+city
"yellow,red,orange,green,bluelondon,newyork,davos,mumbai,delhi"
color.concat(city)
(10) ["yellow", "red", "orange", "green", "blue", "london", "newyork", "davos", "mumbai", "delhi"]
var name = "john"
undefined
name[0]
"j"
name[1]
"o"
name.split("")
(4) ["j", "o", "h", "n"]
var out = "yellow,red,orange,green,bluelondon,newyork,davos,mumbai,delhi"
undefined
out.split(",")
(9) ["yellow", "red", "orange", "green", "bluelondon", "newyork", "davos", "mumbai", "delhi"]
var name = "joHn"
undefined
name[0].toUpperCase+name.slice(1).toLowerCase()
"function toUpperCase() { [native code] }ohn"
name[0].toUpperCase()+name.slice(1).toLowerCase()
"John"