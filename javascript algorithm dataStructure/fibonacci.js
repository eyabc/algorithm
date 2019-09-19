function fibonacci () {
    let fibonacci = [];
    fibonacci[1] = 1;
    fibonacci[2] = 2;

    for(i=3; i<20; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1]
    }
    return fibonacci
}
console.log(fibonacci())