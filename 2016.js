// fail!!
function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let month, pick=4;
    switch(a) {
        case 1:
            month = 0; break;
        case 2: case 4: case 6: case 9: case 11:
            month = 3; break;
        case 3:
            month = 1; break;
        default :
            month = 2; break;
    }
  //  console.log(week[(5+month+b) % 7])
    
    return week[(pick+month+b) % 7];
}

// ixymori , 억만장자 , wonho , - , Jang Kuk Yeong 외 3 명
function getDayName(a, b) {
    var date = new Date(2016, a-1, b)
    return date.toString().slice(0,3).toUpperCase();
}

// 류한경
function getDayName2(a,b){
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
    var day = date.getDay()
    return arr[day];

}
// 박철만
function getDayName3(a,b){
    var answer = "";
  var MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
  var WEEK = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var sum = 0;
    for(var i =1; i<a; i++){
    sum+=MONTH[i-1];
  }
  //  daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  answer = WEEK[(sum+b-1)%7];
  // 1월 1일은 금요일
    // 31,29,31,30,31,30,31,31,30,31,30,31

    return answer;
}

console.log(solution(5, 24))
console.log(getDayName3(5,24))