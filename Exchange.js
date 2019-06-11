
var GalaxyCoin =  require('./GalaxyCoins');
var RomanNumber =  require('./RomanNumber');
var MetalQuotation =  require('./MetalQuotation');

class Exchange {
   
    constructor(){
        this.galaxyCoin = new GalaxyCoin();
        this.romanNumber = new RomanNumber();
        this.metalQuotation = new MetalQuotation();
        this.mensageUndefined = 'I have no idea what you are talking about!!!';
    }

    exchangeMoneyGalaxyToRoman(galaxy) {
        //const coins = this.galaxyCoin.getGalaxyMoneyByRoman
    }

    exchangeMoneyGalaxyToInt(galaxy) {
        const result = this.galaxyCoin.getRomanNumberByGalaxy(galaxy.trim());
        if (result === -1) {
            return result;
        }
        return this.romanNumber.getCompleteNumberByRomanString(result);
    }

    exchangeMoneyGalaxyToMetal(metal, value) {
        return this.metalQuotation.getQuotation(metal, value);
    }

    getMetalInput(input) {
        const arrayMetal  = [this.metalQuotation.gold.name, this.metalQuotation.silver.name, this.metalQuotation.iron.name];
        let indexMach = -1;
        arrayMetal.forEach(metal =>{
            let string = input.toLowerCase();
            if(string.indexOf(metal.toLowerCase())!== -1){
                indexMach = string.indexOf(metal.toLowerCase())
                return false;
            }
        });
        return indexMach;
    } 

    exchange(input) {
        let result = -1;
        // get the first match from name metal
        const isMetal  = this.getMetalInput(input); 
        if(isMetal !== -1) {
            const galaxy = this.exchangeMoneyGalaxyToInt(input.substring(0,isMetal));
            // get the first to prevent error
            if( galaxy !== -1){
                const metalArray = input.substring(isMetal, input.length).split(' ');
                result = this.exchangeMoneyGalaxyToMetal(metalArray[0],galaxy);
                if( result !== -1 ){
                    result = result.toString() +' Credits';
                }
            }
               
        }else{
            result = this.exchangeMoneyGalaxyToInt(input);
        }
        if (result === -1) {
         return this.mensageUndefined;
        }
        return result;
    }
    
}

module.exports = Exchange;