let city = {
    _name:'London',
    _population :1000,

    get name(){
        return this._name
    },

    get Population(){
        return this._population
    },

    addPopulation(){
        this._population++;
    }
}
////////CLASSS///////////
class City{
    constructor(name,country){
        this._name = name;
        this._population = 1000
        this._country = country;
    }
    get name(){
        return this._name
    }
    get Population(){
        return this._population
    }
    get Country(){
        return this._country
    }
    addPopulation(){
        this._population++;
    }

}


const london = new City('London')
london.name()
london.Population()

const Amsterdam = new City('Amsterdam')



class Calculator{
    constructor(input1, input2){
        this.input1 = input1;
        this.input2 = input2;
    }
    add(){
        out = this.input1+this.input2;
        return out
    }

    sub(){
        out = this.input1-this.input2;
        return out
    }
    mul(){
        out = this.input1*this.input2;
        return out
    }
    div(){
        out = this.input1/this.input2;
        return out
    }
}


var mymath = new Calculator(1,2);
mymath.add()
mymath.sub()