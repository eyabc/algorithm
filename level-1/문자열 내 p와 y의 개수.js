function solution1(s){
    let str = s.toLowerCase(), pcnt=0, ycnt=0;
    for (var i = 0; i < str.length; i++) {
        if(str.charAt(i) === 'p') pcnt++;
        if(str.charAt(i) === 'y') ycnt++;
    }
    return pcnt === ycnt
}

//  - , - , - , Younjin Kim 
function numPY1(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length
}

function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
console.log(numPY('pPoooyY'))