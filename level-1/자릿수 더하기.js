function solution2(n)
{
    var answer = 0;

    while (n > 0)
    {
        answer +=  (n % 10)
        n = Math.floor(n / 10);
    }
    return answer;
}

function solution(n)
{
    // var a = (n + '').split('');
    // var b = 0;
    // for(var i = 0; i < a.length; ++i) {
    //     b += parseInt(a[i]);
    // }
    // return b;
    return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}


console.log(solution(123))
