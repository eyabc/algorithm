var i = 0
function recursiveFn () {
    i++
    recursiveFn ()
}

try {
    recursiveFn ()
} catch (ex) {
    alert('i = ' + i + ' error: ' +ex)
}