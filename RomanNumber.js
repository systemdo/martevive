class RomanNumber {
    getIntByRomanString(c) {
        switch (c){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    } 
    
    getCompleteNumberByRomanString(str1) {
        if(str1 === null) return -1;
        let number = this.getIntByRomanString(str1.charAt(0));
        let pre, curr;
        
        for(var i = 1; i < str1.length; i++){
        curr =  this.getIntByRomanString(str1.charAt(i));
        pre =  this.getIntByRomanString(str1.charAt(i-1));
        if(curr <= pre){
            number += curr;
        } else {
            number = number - pre*2 + curr;
        }
        }
        
        return number;
    }

    
}

module.exports = RomanNumber;