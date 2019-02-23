let FoodItem = {
    salt:"according to requrinment",
    foodReq: function(){
        return this.salt;
    }
}

// Es5
module.exports = FoodItem.foodReq();