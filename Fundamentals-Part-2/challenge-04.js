const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill){
    if(bill >= 50 && bill <= 300){
        return (bill * 15) / 100;
    }else{
        return (bill * 20) / 100;
    }
}

for(let i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(tips);
console.log(totals);

//Bonus

const calcAvg = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calcAvg(totals));