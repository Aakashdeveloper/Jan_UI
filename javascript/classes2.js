class Animal{
    constructor(name,breed){
        this._name=name;
        this._breed=breed;
        this._population = 10;
        this._legs = 10;
    }

    get name(){
        return this._name;
    }
    get breed(){
        return this._breed;
    }

    get population(){
        return this._population;
    }
    get legs(){
        return this._legs;
    }

    addPopulation(){
        this._population++;
    }

    static generatePassword(){
        var out = Math.random();
        this._population +=out;
    }



}


class Dog extends Animal{
    constructor(name,breed,color){
        super(name,breed);
        this.color=color;
    }
}


var fluffy = new Dog('fluffy','pug', 'brown')