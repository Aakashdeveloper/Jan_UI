var marks = [10,34,56,12,23]

function validate(mark){
    if(mark>20){
        return mark
    }
    
}

for(i=0; i<marks.length;i++){
    validate(marks[i])
}



var marks = [10,34,56,12,23]

/*function  validate(mark){
    return mark>20
}*/

var marks = [10,34,56,12,23]
var validate = (mark) => { return mark >20 }
marks.filter(validate)


var marks = [10,34,56,12,23]
marks.filter((mark) => { return mark >20 })


var city = ["london", "newyork", "london", "mumbai", "delhi"]
var userinput = "london"
city.indexOf(userinput)

city.filter((cit) => {return city.indexOf(userinput)>-1})

function print(a){
    var out = "My output is "+ a
    return out
}

function add(a,b){
    var sum = a+b
    return print(sum)
}




var a = 10

if(a){
    
}