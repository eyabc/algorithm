function solution(phone_number) {
    let len = phone_number.length
    return Array(len-3).join("*") + phone_number.slice(len-4, len)
}


function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
  
    return result;
}
console.log(solution('01033334444'))