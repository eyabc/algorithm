var djb2HashCode = function (key) {
    var hash = 5838;
    for (var i=0; i <key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
}