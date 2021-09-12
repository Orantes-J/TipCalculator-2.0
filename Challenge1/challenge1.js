// LONG WAY
const tip = function(amount){
    if (amount >= 50 && amount <=300) {
        let tip = amount *.15;
        const total = amount + tip;
        return total;
    } else if(amount > 300){
        let tip = amount * .20;
        const total = amount + tip;
        return total;
    } else{
        let tip = amount *.05;
        const total = amount + tip;
        return  total;
    }
};

// const dinnerTotal = []

// let dinnerTotal = 125;
// grandTotal.push(calTip(dinnerTotal));

// dinnerTotal = 555;
// grandTotal.push(tip(dinnerTotal));

// dinnerTotal = 44;
// grandTotal.push(tip(dinnerTotal));

// console.log(grandTotal)

// ONE LINER FUNCTION

const calTip = function(bill){
    return bill>=50 && bill<=300 ? bill * .15 : bill * .20
}

const dinnerTotal = [125, 555, 44];

const tipAmount = [calTip(dinnerTotal[0]), calTip(dinnerTotal[1]), calTip(dinnerTotal[2])];

grandTotal = [calTip(dinnerTotal[0]) + dinnerTotal[0], calTip(dinnerTotal[1]) + dinnerTotal[1], calTip(dinnerTotal[2]) + dinnerTotal[2]];


console.log(dinnerTotal, tipAmount, grandTotal);
