function solution(n) {
    let answer = '';
    let arr = ["수", "박"] 
    for(let i=0; i<n;i++) {
        answer += (arr[i%2])
    }
    return answer;
}


// 
function waterMelon2(n){
    var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
    //함수를 완성하세요
  
    return result.substring(0,n);
  }

//
function waterMelon3(n){
    var result = "수박";
    result = result.repeat(n).substring(0,n);
    //함수를 완성하세요
  
    return result;
  }

  function waterMelon34(n){
    // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
    return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
  }

  function waterMelon(n){
    var result = "";
      for(var i = 0 ; i < n ; i++) {
          result += i % 2 == 0 ? "수" : "박";
    }
    return result;
  }

  
console.log(waterMelon(5))