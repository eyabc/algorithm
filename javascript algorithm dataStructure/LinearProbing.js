function LinearProbing () {
    var table = []
    var ValuePair = function (key, value) {
        this.key = key
        this.value = value

        this.toString = function () {
            return '[' + this.key + '-' + this.value+']'
        }
    }

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

        if (table[position] == undefined) {
            table[position] = new ValuePair(key, value)
        } else {
            var index = ++position
            while (table[index] != undefined) {
                index++
            }
            table[index] = new ValuePair(key, value)
        }
    }

    this.get = function (key) {
        var position = loseloseHashCode (key)
        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position].value
            } else {
                var index = ++posotion
                while (table[index] === undefined || table[index].key !== key) {
                    index++
                } 
                if (table[index].key === key) {
                    return table[index].value
                }
            }
        } 
        return undefined
    }

    this.remove = function (key) {
        var position = loseloseHashCode (key)
        if (table[position] !== undefined) {
            if (table[position].key === key) {
                table[position] = undefined
            } else {
                var index = ++posotion
                while (table[index] === undefined || table[index].key !== key) {
                    index++
                } 
                if (table[index].key === key) {
                    table[index] = undefined
                }
            }
        } 
        return undefined
    }
}