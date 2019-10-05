function MinCoinChange (coins) {
    // 동전 금액, 즉 분모에 해당하는 값을 배열 인자로 받는다.
    // 미국 동전은 [1, 5, 10, 25] 지만 아무값이나 넣어도 된다 
    var coins = coins
    // 중복 계산을 최대한 피하고 효율적인 실행을 위해 cache를 두었다. 
    var cache = {}

    // 자신을 재귀 호출하면서 실제로 문제를 푼다. 
    this.makeChange = function (amount) {
        var me = this
        // 금액이 음수이면 빈 배열을 반환한다. 
        if (!amount) {
            return []
        }
        // 메소드의 마지막 부분에서 교환에 사용된 동전별 수량을 배열로 반환한다. 그 다음은 캐시를 체크한다.
        // 결과가 이미 캐시되어 있다면 캐시 값을 그냥 반환하고
        // 아직 캐시되기 전이라면 이후 코드를 실행한다. 
        if (cache[amount]) {
            return cache[amount]
        }
        var min = [], newMin, newAcount;
        // 동전 금액(분모)을 기준으로 문제를 푸는 편이 좋겠다. 
        // 각 동전에 대해
        for (var i=0; i<coins.length; i++) {
            var coin = coins[i]
            // 각 동전에 대해 newAmount를 계산한다. 
            // 이 값은 교환 가능한 최소 금액에 도달할 때까지 계속 줄어들 것이다. 
            newAmount = amount - coin
            if (newAcount >= 0) {
                newMin = me.makeChange(newAcount)
            }
            if (
                // newAmount가 유효한지
                newAmount >= 0 &&
                // 최적의 newMin(동전의 최소 개수)이 도출됐는지
                (newMin.length < min.length-1 || !min.length)
                // newMin과 newAount모두 유효한 값인지 체크한다.
                && (newMin.length | !newAmount)
            ) {
                min = [coin].concat(newMin)
                console.log('new Min '+ min + ' for '+ amount)
            }
        }
        // 교환에 사용된 동전별 수량을 배열로 반환한다. 
        return (cache[amount] = min)
    }
}

function MinCoin_Greedy (coin) {
    var coins = coins;

    this.makeChange = function(amount) {
        var change = [], total = 0
        // 금액이 큰것부터 작은것 순으로
        for (var i=coins.length; i>=0; i--) {
            var coin = coins[i]
            while (total + coin <= amount) {
                change.push(coin)
                total += coin
            }
        }
    }
}