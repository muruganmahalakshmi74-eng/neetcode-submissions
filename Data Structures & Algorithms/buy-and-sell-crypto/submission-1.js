class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let n = prices.length
       let max_profit=0
       let buy_prices = prices[0]
       for(let i=1;i<n;i++){
        let curr_price = prices[i] - buy_prices
        if(curr_price > max_profit){
            max_profit = curr_price
        }
        if(prices[i] < buy_prices){
            buy_prices = prices[i]
        }
       }
       return max_profit
    }
}
