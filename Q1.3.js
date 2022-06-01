class FuelPump{
    fuelPrice;
    fuelQuantity;

    constructor(fuelPrice = 0, fuelQuantity = 0){
        if(fuelPrice < 0 || fuelQuantity < 0){
           throw console.error("Enter a valid number")
        }
        this.fuelPrice = fuelPrice;
        this.fuelQuantity = fuelQuantity;

    }


    fillWithPrice(price) {
        const litersPumped = (price/this.getPrice).toFixed(2) 
        
        if(this.checkVariables(litersPumped)){
            return 0
        }

        this.newQuantity = litersPumped
        console.log(`${litersPumped} liters was pumped`)
        
        return litersPumped
    }

    fillWithLiters(liters){
        if(this.checkVariables(liters)){
            return 0
        }
        
        const paidPrice = (liters * this.getPrice).toFixed(2)

        this.newQuantity = liters
        console.log(`The total price is $${paidPrice}`)

        return paidPrice
    }

    //check if there is enough fuel and if price is not equal zero 
    checkVariables(liters){

        if(this.getQuantity == 0 || liters > this.getQuantity || this.getPrice <= 0){
            return true
        }

        return false
    }


    setPrice(price){
        if(price < 0){
            throw console.error("Invalid price")
        }
        this.fuelPrice = price
    }
 
    setQuantity(quantity){
        this.fuelQuantity = quantity
    }


    //Set the quantity after filling with price or liters 
    set newQuantity(liters){
        this.fuelQuantity = (this.fuelQuantity - liters);
    }


    get getQuantity(){
        return this.fuelQuantity;
    }

    get getPrice(){
        return this.fuelPrice
    }

  
}

let fuelPump = new FuelPump(2, 15)
fuelPump.setPrice(0)
console.log(fuelPump.fillWithLiters(8))
fuelPump.setQuantity(16)
console.log(fuelPump.fillWithPrice(1))
console.log(fuelPump)


