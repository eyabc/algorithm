function solution2(s, k) {
    var answer = s.split('')
    //
    for(let i = 0; i<s.length; i++) {
        let q = s.charCodeAt(i)
        if(q === 32) {
            continue;
        } else if(64<q && 91>q) {
            q = q + k
            if(q > 90) {
                q = q - 26
            }
            answer[i] = String.fromCharCode(q)
        } else {
            q = q + k
            if(q > 122) {
                q = q - 26
            }
            answer[i] = String.fromCharCode(q)
        }
    }
    return answer.join('');
}

//
function caesar2(s, n) {
    var result = "";
    // 함수를 완성하세요.
  var car = ""

  for (var i=0; i<s.length;i++)
  {        
    if ( s[i] == ' ' )
      result += ' '
    else 
        result += String.fromCharCode( (s.charCodeAt(i)>90)?
      (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 )     
  }

    return result;
}

function caesar(s, n) {
    var result = s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);

    // 함수를 완성하세요.
    return result;
}

const rotate = (code, n, offset) => (code - offset + n) % 26 + offset;
const push = (code, n) => code < 65 ? code : rotate(code,n,code < 97 ? 65 : 97);
const caesar = (s, n) => s.split('').map((char) => String.fromCharCode(push(char.charCodeAt(0),n))).join('');  

function caesar_pretty(s, n) {
  return s
    .split('')
    .map(
        (char) =>
            String.fromCharCode(
          push(
            char.charCodeAt(0),
            n
          )
        )
    )
    .join('');  
}


console.log(caesar("a B z", 4))