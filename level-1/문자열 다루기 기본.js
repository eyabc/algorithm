function solution2(s) {
    if(s.length === 4 || s.length === 6) {
        for(let i = 0; i<s.length; i++) {
            if(isNaN(parseInt(s.charAt(i)))) return false
        }
        return true
    } else {
        return false
    }
}
//
function alpha_string46(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false 
 }


 //
 function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }
console.log(alpha_string46("121a34"))