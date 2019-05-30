// total price of phone purchase

// keep purchasing phones unitl out of money

// buy acessories as long as the purchase amount is below mental spending threshold.

// calculate purchase amount, then add tax, then print the amount

// check against balance

const initialBalance = prompt("Insira o seu saldo: ");

const taxRate = prompt("Insira o valor do imposto, em percentual: ");

const spendingThreshold = 200;
const phonePrice = 100
const accessoryPrice = 10

let currentBalance = initialBalance;

let currentPurchase = 0;

function calculateTax(tax, amount) {
    return amount * (1 + tax);
}

function calculatePurchase(){
    if (phonePrice <= spendingThreshold && currentPurchase + phonePrice <= currentBalance) {
        currentPurchase += phonePrice;
        console.log("no if " + currentPurchase);
    }
    while (currentPurchase <= spendingThreshold && currentPurchase <= currentBalance) {
        currentPurchase += accessoryPrice;
        console.log("no while " + currentPurchase);
    }
    currentPurchase = calculateTax(Number(taxRate), currentPurchase);
    console.log("no calculate tax " + currentPurchase);

    return currentPurchase;
}

while (currentPurchase <= currentBalance) {
    calculatePurchase();
}

if (currentPurchase == 0) {
    console.log("Você não tem saldo suficiente... :(");
} else {
    console.log("Sua compra deu: $" + currentPurchase.toFixed(2));
}
