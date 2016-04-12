class Slice {
        
    constructor(){
        this._toppings = [];
        this._isButtered = false;
        this.heat = 0;
    }
    
    butter(){
        if(this._isButtered){
            //todo: double butter?! really?   
        }
        
        this._isButtered=true
    }
    
    spreadTopping(topping){ 
        this._toppings.push(topping);
    }

}