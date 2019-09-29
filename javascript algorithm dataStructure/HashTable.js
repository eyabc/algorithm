function HashTable () {
    var table = []

    var loseloseHashCode = function (key) {
        // 결과 값을 저장할 변수를 선언
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        // 임의의 숫자로 나눈 나머지를 최종값으로 반환한다. 
        return hash % 37
    }
    this.put = function (key, value) {
        var position = loseloseHashCode(key) 
        console.log(position + '-' + key)
        table[position] = value
    }
    this.get = function (key) {
        return table[loseloseHashCode(key)] 
    }
    // hash 테이블은 ArrayList 처럼 table 배열의 원소 자체를 삭제할 필요는 없다. 
    // 배열 전체에 원소들이 고루 분포되어 있으므로 어떤 인덱스엔 값이 할당되지 않은 채 기본 값 undefined가 들어있다
    // 다음에 기존의 다른 원소를 조회/삭제 시 어차피 해시함수로 인덱스를 찾을 수 없으니 문제 될 것은 없다. 
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined
    }
}