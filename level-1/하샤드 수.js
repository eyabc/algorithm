function solution(x) {
    // return x % ((x+'').split('').map(e=> e/1 ).reduce((a,b) => a + b)) === 0 ? true : false
    // return x % ((x+'').split('').map(e=> e/1 ).reduce((a,b) => a + b)) === 0
    // return x % ((x+'').split('').reduce((a,b) => +a + +b)) === 0
    return ! (x % ((x+'').split('').reduce((a,b) => +a + +b)))
}

function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
  }
  
console.log(solution(18))