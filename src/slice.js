class Slice {
    
    _toppings = [];
    _isButtered = false;
    
    constructor(){
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