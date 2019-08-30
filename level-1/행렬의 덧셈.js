function solution(arr1, arr2) {
    let n = arr1.length, m = arr1[1].length
    var answer = new Array(n);
    

    for(let i=0; i<=m+n;i++) {
        answer[i] = new Array(m) 
    }

    for(let i=0; i<n;i++) {
         for(let j = 0; j<m; j++) {
            answer[i][j] = arr1[i][j]+arr2[i][j]
         }
        
    }
    return answer.filter(e => e.filter(v=> v!= "") != "");
}
function sumMatrix(A,B){
    return A.map((a,i)=> a.map((b,j) => b + B[i][j]))
}



console.log(sumMatrix(
    [[1],[2]], 
    [[4],[6]],
    ))
  console.log(sumMatrix([[1,2],[2,3]],	[[3,4],[5,6]]))
console.log(sumMatrix([[1,2],[2,3],[2,3],[2,3],[2,3]],	[[3,3],[5,3],[2,3],[2,3],[2,3]]))
 console.log(sumMatrix([[1,2],[2,3],[2,3],[2,3]],	[[3,3],[5,3],[2,3],[2,3]]))
