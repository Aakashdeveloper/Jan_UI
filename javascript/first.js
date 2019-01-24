string
number
boolean

string
--------------------
"kfnbkjfgnkj"
"8493"
"true"
'dksk'
"jbjh'
'jnjn"

number
-----------
458
8954.546
0000
84397847869475867

boolean
--------
true
false

es5/es6/esnext

var a = "aakash"
var a = "aakash"
undefined
a
"aakash"
var marks = 10
undefined
marks
10
var isfullTime = true
undefined
isfullTime
true

let b = 10
undefined
b
10
let b = 20
VM394:1 Uncaught SyntaxError: Identifier 'b' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM394:1
b = 20
20

-------------
const c = 10
undefined
c
10
const c = 11
VM437:1 Uncaught SyntaxError: Identifier 'c' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM437:1
c = 11
VM450:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3


    var a = 10
    undefined
    var d = 10
    undefined
    a+d
    20
    var x = "learn"
    undefined
    var y = " javascript"
    undefined
    x+y
    "learn javascript"
    var aa = true
    undefined
    var bb = false
    undefined
    aa+bb
    1
    var bb = true
    undefined
    aa+bb
    2

    var cc = 10
undefined
var dd = "my age is "
undefined
dd+cc
"my age is 10"
var ff = 10
undefined
dd+cc+ff
"my age is 1010"
cc+ff+dd
"20my age is "



10+10+"10"
"2010"
"10"+10
"1010"
"10"+10+10
"101010"
10+"10"+10
"101010"

var a = 10
undefined
var a == 10
VM813:1 Uncaught SyntaxError: Unexpected token ==
var b = "10"
VM830:1 Uncaught SyntaxError: Identifier 'b' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM830:1
var bb = "10"
undefined
a = bb
"10"
a
"10"
cc = 10
10
bb
"10"
cc == bb
true
cc === bb
false


"10"=="10"
true
"10"==="10"
true
"john"==="john"
true
var a = "john"
undefined
var h = true
undefined
a+h
"johntrue"
h+a
"truejohn"
var t = 10
undefined
t+h
11


"john"-"jo"
NaN
true*true
1
true-true
0
10+!0
11
10+10
20
10-5
5
10*8
80
18/2
9

10%2
0
10%3
1

isNaN(10)
false
isNaN("dsds")
true

``