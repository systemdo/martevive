class GalaxyCoin {
    constructor() {
        this.coins = [
            { name: 'glob', value: 'I' },
            { name: 'prok', value: 'V' },
            { name: 'pish', value: 'X' },
            { name: 'tegj', value: 'L' }
        ];
    }

    getGalaxyMoneyByRoman(roman) {
        const coin = this.coins.find(coin => ( coin.value === roman));
        return coin.name;
    }

    getRomanNumberByGalaxy(galaxy) {
        /** match exchange when user tip long text */
        if (galaxy.match(/\s/g)) {
            let arrayGalaxy = galaxy.split(' ');
            let coin = '';
            let galaxyInValid = false;
            // filter write space in array
            arrayGalaxy = arrayGalaxy.filter( indice => indice !== '');
            
            arrayGalaxy.forEach(galaxy => {        
                const coinResult = this.coins.find(coin => ( coin.name === galaxy.trim().toLowerCase()));
                if(coinResult === undefined){
                    galaxyInValid = true;
                    return false;
                }else{
                    coin += coinResult.value;
                }
            });
            if (galaxyInValid) {
                return -1
            }
            return coin;
        }

        const coin = this.coins.find(coin => ( coin.name === galaxy.trim().toLowerCase()));
        if(coin === undefined)
           return -1

        return coin.value;
    }
    
}
module.exports = GalaxyCoin;