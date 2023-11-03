//For UniV2 type of pools:
let exampleTokenSet = {
    token1: 10000,
    token2: 10000
};

function uniClassic(tokenSet, tokenBuy, buyingAmount, tokenSell) {
    let product = tokenSet.token1 * tokenSet.token2;
    if (tokenBuy === tokenSell) {
        return console.log("Invalid input.");
    } else if (buyingAmount > tokenSet[tokenBuy]) {
        return console.log("There is no enough liquidity in the pool.");
    }
    let theoreticalPrice = tokenSet[tokenSell] / tokenSet[tokenBuy];
    tokenSet[tokenBuy] -= buyingAmount;
    let payingAmount = (product / tokenSet[tokenBuy]) - tokenSet[tokenSell];
    tokenSet[tokenSell] += payingAmount;
    let realPrice = payingAmount / buyingAmount;
    let slippage = ((realPrice / theoreticalPrice) - 1) * 100;
    console.log(buyingAmount + " many " + tokenBuy + " bought in exchange for " + payingAmount + " many " + tokenSell);
    console.log("Theoretical price is " + theoreticalPrice);
    console.log("Real price is " + realPrice);
    console.log("Slippage of this trade is " + slippage + "%");
    console.log(tokenSet);
}

uniClassic(exampleTokenSet, "token1", 100, "token2");