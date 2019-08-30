function solution(arr) {
    if(arr.length === 1) return [-1]
    let b = arr.slice()
    b.splice(b.indexOf(arr.sort((a,b) => a-b).reverse().pop()), 1)
    return b
}

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    return arr;
}


console.log(solution([4,3,2,12,7,10,11]))