function solution(skill, skill_trees) {
    let cnt =0
    let str = skill.split('')
    let tree = skill_trees
    .map((i, ki) => {
        let re = new RegExp(`[${str}]`);
        if(!re.exec(i)) cnt++
        return i.split('')
    }).forEach(i => {
        let que = []
        i.forEach((j, jk) => str.forEach(k => k === j? que.push(j) : '' ) )
        que.some((q, qk) => {
             if(q !== str[qk]) {
                  return true
             } else if (q === str[qk] && qk === que.length-1) {
                 cnt++
             }
        })
    })
    return cnt
}

function solution2(skill, skill_trees) {
    var answer = 0;
    var regex = new RegExp(`[^${skill}]`, 'g');

     return skill_trees
        .map((x) => x.replace(regex, ''))
         .filter((x) => {
             return skill.indexOf(x) === 0 || x === "";
         })
         .length
}

 console.log(solution2('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']))