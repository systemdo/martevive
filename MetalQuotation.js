class MetalQuotation {
    constructor() {
        this.gold = { name: 'Gold', value: '14450' },
        this.silver = { name: 'Silver', value: '17' };
        this.iron = { name: 'Iron', value: '195.5' };
        
    }

    getQuatationGold(value) {
        return this.gold.value * value;  
    }

    getQuatationSilver(value) {
        return this.silver.value * value;  
    }

    getQuatationIron(value) {
        return this.iron.value * value;  
    }

    getQuotation(metal, value) {
        switch (metal.trim().toLowerCase()) {
            case this.gold.name.toLowerCase():
                return this.getQuatationGold(value);
            break;
            case this.silver.name.toLowerCase():
                return this.getQuatationSilver(value);
            break;
            case this.iron.name.toLowerCase():
                return this.getQuatationIron(value);
            break;
            default:
                return -1;
            break;
        }
    }
    

    
}
module.exports = MetalQuotation;