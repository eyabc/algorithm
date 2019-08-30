function solution(n, m) {
    let i = 2, max = 1;
    if(n === m) {
        return [n, n]
    }
    while(i<n+m) {
        (n % i === 0) && (m % i === 0) ? max = i : ''
        i++
    }
    let min = n*m/max
    return [max, min]
}

function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}


console.log(solution(4,2))