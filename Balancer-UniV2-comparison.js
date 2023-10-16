//For UniV2 type of pools:

let token0 = 3000000
let token1 = 5000000
let product = token0 * token1
console.log("Starting the script");
function swap(tokenBuy, buyingAmount){
    if(tokenBuy === "token0"){
        let newToken0 = token0 - buyingAmount;
        let newToken1 = product / newToken0;
        let paidAmount = newToken1 - token1
        console.log("New token0 amount is " + newToken0);
        console.log("New token1 amount is " + newToken1);
        console.log(buyingAmount + " many token0 bought in exchange for " + paidAmount + " many token1");
        let realPrice = paidAmount / buyingAmount;
        let theoreticalPrice = token1 / token0;
        let slippage = ((realPrice / theoreticalPrice) - 1) * 100;
        console.log("Slippage of this trade is " + slippage + "%");       
    }else if (tokenBuy === "token1"){
        let newToken1 = token1 - buyingAmount;
        let newToken0 = product / newToken1;
        let paidAmount = newToken0 - token0
        console.log("New token1 amount is " + newToken1);
        console.log("New token0 amount is " + newToken0);
        console.log(buyingAmount + " many token1 bought in exchange for " + (newToken0 - token0) + " many token0")
        let realPrice = paidAmount / buyingAmount;
        let theoreticalPrice = token0 / token1;
        let slippage = ((realPrice / theoreticalPrice) - 1) * 100;
        console.log("Slippage of this trade is " + slippage + "%"); 
    }else{
        console.log("Invalid input")
    }
}

swap("token0", 100)

//For a customized balancer pool: