const car = {
    color:'red',
    milage:15,
    carshow(){
     console.log(`i have a car of color ${this.color} with milage ${this.milage}`)
    }
}


//////////////

var city = {
    _pop: 76689768,
    _name:'London',
    _country:'UK',
    get popCount(){
        if(typeof this._pop === 'number'){
            return `Current population of london is ${this._pop}`
        }
        else{
            return 'pop is not integer'
        }
    }
}

city._pop="dvE";


///
const person = {
    age:46,
    set setage(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge
        }else{
            console.log("enter correct value")
        }
    }
}

/////
var cityCreatorFactory  = (name, pop, country) => {
    return {
        name:name,
        pop:pop,
        country:country,
        timezone:'GMT',
        status(){
            return `Pop Status of ${this.name} is ${this.pop}`
        }

    }
}

var cityCreatorFactory  = (name, pop, country) => {
    return {
        name,
        pop,
        country,
        timezone:'GMT',
        status(){
            return `Pop Status of ${this.name} is ${this.pop}`
        }

    }
}

////////
var city = {
    pop: 76689768,
    name:'London',
    country:'UK',
    popCount:{
        current: 8878,
        forcast: 87897978
    }
}

//var pop = city.pop

//var {pop} = city

//var current = city.popCount.current

var {current} = city.popCount

/////
var mycity = {
    pop: 76689768,
    name:'London',
    country:'UK'
}

Object.keys(mycity)
Object.entries(mycity)
Object.assign({name:'amsterdam'})