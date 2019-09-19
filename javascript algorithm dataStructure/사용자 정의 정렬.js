function userSort() {
    let user = [
        {name: 'John', age: 12},
        {name: 'Junil', age: 26},
        {name: 'Eunyoung', age: 24 },
    ]
    user.sort((a,b) => {
        // if (a.age < b.age) {
        //     return -1 
        // } 
        // if( a.age > b.age) {
        //     return 1

        // }
        // return 0
        return a.age === b.age ? 0 : (a.age < b.age ? -1 : 1)
    })
    return user
}

function StringSort() {
    let names = ['Ana', 'ana', 'junil', 'Juil' ]

    return names.sort((a,b) => {
        let i = a.toLocaleLowerCase()
        let j = b.toLocaleLowerCase()

        return i === j ? 0 : ( i < j ? -1 : 1)
    
    })
}
console.log(StringSort())