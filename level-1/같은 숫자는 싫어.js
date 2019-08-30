function solution(arr)
{
    return arr.filter((i,k)=> i !== arr[k+1]);
}

console.log(solution([4,4,4,3,3]))