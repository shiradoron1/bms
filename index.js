const Bamadash = {
    calc(operand1, operand2, operator) {
        if (operator=="*")
        {
             return (operand1*operand2);
        }
        if (operator == "/")
        {
            return (operand1/operand2);
        }
        if(operator == "+")
        {
            return (operand1+operand2);
        }
        else 
        {
            return (operand1-operand2);
        }

    },
    compact(array){
        throw new Error("Method not implimented.");
    },
    intersection(array1,array2, isStrict){
        throw new Error("Method not implimented.");
    },
    filter(array) {
        throw new Error("Method not implimented.");
    },
    size(collection) { 
        throw new Error("Method not implimented.");
    },
    castArray(value) {
        throw new Error("Method not implimented.");
    }
}

module.exports = Bamadash;