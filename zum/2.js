function solution (A) {
    const answer = [];
    let max = -1;
    const obj = {};
    A.forEach(item => {
        const number = item.toString();
        let sum = 0;
        for (let i =0; i<number.length; i++) {
            sum += number[i] * 1;
        }
        if(!obj[sum]) obj[sum] = [];
        if (obj[sum].length > 0) {
            const n = Math.max(...obj[sum].map(v => v + item));
            if (n > max) max = n;
        }
        obj[sum].push(item);
    });
    return max;
}
// function solution1 (A) {
//     const obj = {}
//     return A.reduce((max, v, k) => {
//         const n = […`${v}`].reduce((a, b) => a*1 + b*1)
//         const arr = obj[n] || []
//         if (arr) {
//             const sum = Math.max(…arr.map(v2 => v + A[v2]))
//             if (sum > max) max = sum
//         }
//         obj[n] = (arr.push(k), arr)
//         return max
//     }, -1)
// }

console.log(solution([51, 71, 17, 42]) === 93)
console.log(solution([42, 33, 60]) === 102)
console.log(solution([51, 32, 43]) === -1)

console.log(solution([51, 71, 17, 42]) === 93);
// console.log(solution([42, 33, 60]) === 102);
// console.log(solution([51, 32, 43]) === -1);
