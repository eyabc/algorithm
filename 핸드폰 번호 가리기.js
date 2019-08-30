function solution(phone_number) {
    let len = phone_number.length
    return Array(len-3).join("*") + phone_number.slice(len-4, len)
}
console.log(solution('01033334444'))