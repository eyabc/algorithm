function arr1(matrix) {
    for(let i = 0; i< matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) {
            console.log(matrix[i][j])
        }
    }
}

function arr3(matrix) {
    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) {
            for(let k = 0; k<matrix[i][j].length; k++) {
                console.log(matrix[i][j][k])
            }
        }
    }
}