function solution (A) {
    const parse = A.sort().reverse();

    for (let i = 0; i < parse.length; i++) {
        const v = parse[i];
        const lastIndex = parse.lastIndexOf(v);

        if (v === 1 && lastIndex === i) {
            return 0
        }
        if ((lastIndex - i + 1) === v) {
            return v;
        }
    }
}

// console.log(solution([3, 8, 2, 3, 3, 2]) === 3)
// console.log(solution([7, 1, 2, 8, 2]) === 2)
// console.log(solution([3, 1, 4, 1, 5]) === 0)
// console.log(solution([5, 5, 5, 5, 5]) === 5)
console.log(solution([5, 5, 6, 7, 11, 34, 5, 5, 5, 7, 8, 10, 14, 53]))
