function solution(arr) {
    var answer = 0 , list = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "(") {
            list.push(arr[i]);
            continue;
        }
        list.pop();
        var val = (arr[i-1] == "(") ? list.length : 1;
        answer += val;
    }
    return answer;
}
console.log(solution("()(((()())(())()))(())"))




