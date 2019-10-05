function fibonacci (num) {
    let fibonacci = [];
    fibonacci[1] = 1;
    fibonacci[2] = 2;

    for(i=3; i<num; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1]
    }
    return fibonacci
}

function Fibonacci (num) {
    if (num === 1 || num === 2) {
        return 1
    }
    return Fibonacci(num -1) + fibonacci(num -2)
}
console.log(fibonacci())