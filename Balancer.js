
//Two assets with 80-20 weight balance:
//The weight of the token1 will be 80%

let exampleTokenSet1 = {
    token1 : 1600,
    token2 : 400
}
function balTwoAssets80_20Weight(tokenSet, tokenBuy, buyingAmount, tokenSell){
    let product = (tokenSet.token1**4) * tokenSet.token2;
    let payingAmount = 0
    let theoreticalPrice = 0
    if (tokenBuy === tokenSell){
        return console.log("Invalid input.")
    } else if (buyingAmount > tokenSet[tokenBuy]) {
        return console.log("There is no enough liquidity in the pool.");
    } else if (tokenBuy === "token1"){
        theoreticalPrice = tokenSet[tokenSell] / (tokenSet[tokenBuy] / 4);
        tokenSet[tokenBuy] -= buyingAmount;
        payingAmount = (product / (tokenSet.token1**4)) - tokenSet[tokenSell];
        tokenSet[tokenSell] += payingAmount;
    } else if (tokenBuy === "token2"){
        theoreticalPrice = (tokenSet[tokenSell] / 4) / tokenSet[tokenBuy];
        tokenSet[tokenBuy] -= buyingAmount;
        payingAmount = ((product / tokenSet[tokenBuy])**(1/4)) - tokenSet[tokenSell];
        tokenSet[tokenSell] += payingAmount;
    }
    
    let realPrice = payingAmount / buyingAmount;
    let slippage = ((realPrice / theoreticalPrice) - 1) * 100;
    console.log(buyingAmount + " many " + tokenBuy + " bought in exchange for " + payingAmount + " many " + tokenSell);
    console.log("Theoretical price is " + theoreticalPrice);
    console.log("Real price is " + realPrice);
    console.log("Slippage of this trade is " + slippage + "%");
    console.log(tokenSet);
}

balTwoAssets80_20Weight(exampleTokenSet1, "token1", 10, "token2")



//Three assets with equal weight balance:

let exampleTokenSet2 = {
    token1: 20000,
    token2: 20000,
    token3: 20000
};

function balancerThreeAssetsEqualWeight(tokenSet, tokenBuy, buyingAmount, tokenSell){
    let product = tokenSet.token1 * tokenSet.token2 * tokenSet.token3;
    let payingAmount = 0;
    let theoreticalPrice = 0;
    let otherToken = product / (tokenSet[tokenBuy] * tokenSet[tokenSell]);
    if (tokenBuy === tokenSell){
        return console.log("Invalid input.")
    } else if (buyingAmount > tokenSet[tokenBuy]) {
        return console.log("There is no enough liquidity in the pool.");
    }

    theoreticalPrice = tokenSet[tokenSell] / tokenSet[tokenBuy];
    tokenSet[tokenBuy] -= buyingAmount;
    payingAmount = (product / (tokenSet[tokenBuy] * otherToken)) - tokenSet[tokenSell];
    tokenSet[tokenSell] += payingAmount;
    let realPrice = payingAmount / buyingAmount;
    let slippage = ((realPrice / theoreticalPrice) - 1) * 100;
    console.log(buyingAmount + " many " + tokenBuy + " bought in exchange for " + payingAmount + " many " + tokenSell);
    console.log("Theoretical price is " + theoreticalPrice);
    console.log("Real price is " + realPrice);
    console.log("Slippage of this trade is " + slippage + "%");
    console.log(tokenSet);
}

balancerThreeAssetsEqualWeight(exampleTokenSet2, "token1", 100, "token3")



//Three assets with 40-40-20 weight balance:
//The weight of the token1 and token2 will be 40%

let exampleTokenSet3 = {
    token1: 100,
    token2: 200,
    token3: 300
};

function balancerThreeAssets40_40_20(tokenSet, tokenBuy, buyingAmount, tokenSell){
    let product = (tokenSet.token1 ** 2) * (tokenSet.token2 ** 2) * tokenSet.token3;
    let payingAmount = 0;
    let theoreticalPrice = 0;
    let otherToken = 0;
    if (tokenBuy === tokenSell){
        return console.log("Invalid input.")
    } else if (buyingAmount >= tokenSet[tokenBuy]) {
        return console.log("There is no enough liquidity in the pool.");
    } else if (tokenSell === "token3") {
        theoreticalPrice = tokenSet[tokenSell] / (tokenSet[tokenBuy] / 2);
        tokenSet[tokenBuy] -= buyingAmount;
        payingAmount = (product / ((tokenSet.token1 ** 2) * (tokenSet.token2 ** 2))) - tokenSet[tokenSell];
        tokenSet[tokenSell] += payingAmount;
    } else if (tokenBuy === "token3") {
        theoreticalPrice = (tokenSet[tokenSell] / 2) / tokenSet[tokenBuy];
        otherToken = (product / (tokenSet[tokenBuy] * (tokenSet[tokenSell] ** 2))) ** (1/2);
        tokenSet[tokenBuy] -= buyingAmount;
        payingAmount = ((product / (tokenSet[tokenBuy] * (otherToken ** 2))) ** (1/2)) - tokenSet[tokenSell];
        tokenSet[tokenSell] += payingAmount;
    } else {
        theoreticalPrice = (tokenSet[tokenSell] / 2) / (tokenSet[tokenBuy] / 2);
        tokenSet[tokenBuy] -= buyingAmount;
        payingAmount = ((product / ((tokenSet[tokenBuy] ** 2) * tokenSet.token3)) ** (1/2)) - tokenSet[tokenSell];
        tokenSet[tokenSell] += payingAmount;
    }

    let realPrice = payingAmount / buyingAmount;
    let slippage = ((realPrice / theoreticalPrice) - 1) * 100;
    console.log(buyingAmount + " many " + tokenBuy + " bought in exchange for " + payingAmount + " many " + tokenSell);
    console.log("Theoretical price is " + theoreticalPrice);
    console.log("Real price is " + realPrice);
    console.log("Slippage of this trade is " + slippage + "%");
    console.log(tokenSet);
}

balancerThreeAssets40_40_20(exampleTokenSet3, "token1", 10, "token2")
