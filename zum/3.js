function solution (A) {
    let count = 0;
    const getTrue = (arr) => {
        let prev = null;
        const len = arr.length;
        for (let i = 1; i < len; i++) {
            if (arr[i] === arr[i - 1]) return false;
            const compare = arr[i] < arr[i-1];
            if (compare === prev) return false;
            prev = compare
        }
        return true;
    };

    if(getTrue(A)) return 0;
    const len = A.length;
    for (let i = 0; i < len; i++) {
        const tempArr = [...A];
        tempArr.splice(i, 1);
        if (getTrue(tempArr)) count++;
    };
    return count > 0 ? count : -1;
}

console.log(solution([3, 4, 5, 3, 7]) === 3)
console.log(solution([1, 2, 3, 4]) === -1)
console.log(solution([1, 3, 1, 2]) === 0)
console.log(solution([1, 3, 3, 3]) === -1)
console.log(solution([1]) === 0)
console.log(solution([1, 1]) === 2)
console.log(solution([1, 2]) === 0)
console.log(solution([2, 2]) === 2)
console.log(solution([2, 2, 2]) === -1)
console.log(solution([2, 3, 2]) === 0)
console.log(solution([10, 20, 30, 20]) === 2)
console.log(solution([10, 20, 30, 19]) === 3)
console.log(solution([10, 20, 30, 19, 10, 20, 30, 19]) === -1)