function solution2(n) {
    let prime = 1, flag = 0;
    for(let i = 3; i<=n; i++) {
        for(let j = 2; j<i; j++){
            if(i % j === 0) { flag=1;break;}
        }
        if(flag === 1) {flag=0; continue;}
        prime++
    }
    return prime
}

function solution5(n) {
    let prime = [2], flag = false;
    for(let i = 3; i<=n; i+=2) {
        for(let j = 1, len = prime.length; j < len; j++){
            if(i % prime[j] === 0) {
                flag = true
                break;
            }
        }
        if(!flag) prime.push(i)
        flag = false
    }
    return prime
}
function solution4(n) {
    let prime = [2], flag = false, i = 3
    while (i <= n) {
        for(const v of prime){
            if (i % v === 0) {
                flag = true
                break
            }
        }
        if (!flag) prime.push(i)
        i+=2
    }
    return prime
}
// 2 3 5 7 11 13 17 19 23 29 31 37 41
// 2 => 3
// 2 3 => 5
// 2 3 5 => 7
// 2 3 5 7 => 9
function solution33(n) {
    let prime = [2], flag = false;
    for(let i = 3; i<=n;) {
        for(let j = 1; prime[j] < i/2; j++){
            if(i % prime[j] === 0) {
                flag = true
                break;
            }
        }
        if(!flag) prime.push(i)
        flag = false
        i += 2
        while (i > 7 && !i%2 || !i%3 || !i%5 || !i%7) {
            i+=2
        }
    }
    return prime
}
function solution4s(n) {
    let prime = [2], flag = false;
    for(let i = 3, a=6; i<=n;) {
        for(let j = 1; prime[j] < Math.sqrt(i); j++){
            if(i % prime[j] === 0) {
                flag = true
                break;
            }
            if(a % prime[j] === 0) {
                flag = true
                break;
            }
        }
        if(!flag) prime.push(i)
        flag = false
        i += 2
        a += 3
    }
    return prime
}

function solution(n) {
    let prime = [2], flag = false;
    let arr = [0]

    for(var i=1;i<n;i++){ //배열 초기화
        if(i>1 && i % 2) {
            arr[i]= 0
        } else if(i>2 && (i % 3)) {
            arr[i]= 0
        }
        else {
            arr[i]=i+1;
        }
        
    }
    function solution(n) {
        const arr = []
        for (let i = 0; i < n; i++) arr.push(i+1)
        delete arr[0]
        const max = Math.pow(n, 1/2)
        for (let i = 2; i <= max; i++) {
            if (arr[i-1]) for (let j = i+i; j <= n; j += i) delete arr[j-1]
        }
        return arr.filter(v => v).length
    }
    // for(let i = 3, a=6; i<=n;) {
    //     for(let j = 1; prime[j] < Math.sqrt(i); j++){
    //         if(i % prime[j] === 0) {
    //             flag = true
    //             break;
    //         }
    //         if(a % prime[j] === 0) {
    //             flag = true
    //             break;
    //         }
    //     }
    //     if(!flag) prime.push(i)
    //     flag = false
    //     i += 2
    //     a += 3
    // }
    return arr
}

console.log(solution(25))