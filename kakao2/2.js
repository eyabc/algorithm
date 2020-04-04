function solution(s) {
    let answer = [];
    const parse = eval(s.replace(/{/g, '[').replace(/}/g, ']')).sort((a, b) => {
        return a.length - b.length;
    });

    parse.forEach(i => {
        i.forEach(j => {
            i.pop()
        })
    })
    return parse;
}

function solution (s) {
  const arr = eval(s.replace(/{/g, '[').replace(/}/g, ']'))
  arr.sort((a, b) => a.length - b.length)
  // console.log(arr)
  const resolve = [arr.shift()[0]]
  arr.forEach(v => {
    // console.log('before', v, resolve)
    while (v.length > 1) {
      const index = v.findIndex(v2 => resolve.includes(v2))
      v.splice(index, 1)
    }
    resolve.push(v.pop())
    // console.log('after', v, resolve)
  })
  // console.log(resolve)
  return resolve
}