function Set () {
    var items = {}

    this.has = function (value) {
        // return value in items;
        return items.hasOwnProperty(value)
    }

    // 키와 값을 동일하게 저장하는 이유는 나중에 값을 찾을 때 편하기 때문이다.
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value
            return true
        } else {
            return false
        }
    }

    this.remove = function (value) {
        if (this.has (value)) {
            delete items[value]
            return true
        } else {
            return false
        }
    }

    this.clear = function () {
        items = {}
    }

    this.size = function () {
        // 1. length 변수

        // 2. Object.keys 메서드: 객체의 모든 프로퍼티를 배열로 변환
        return Object.keys(items).length
    }
    this.sizeLegacy = function () {
        var count = 0
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) ++count
        }
        return count
    }

    this.values = function () {
        return Object.keys(items)
    }

    this.valueLegacy = function () {
        var keys = [];
        for (var key in items) {
            keys.push(key)
        }
        return keys
    }

    this.union = function (otherSet) {
        var unionSet = new Set ()

        var values = this.values ()
        for (var i=0; i<values.length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values ()
        for (var i=0; i<values.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    }

    this.intersection = function (otherSet) {
        var intersectionSet = new Set ()

        var values = this.values ()
        for (var i=0; i<values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }
    this.difference = function (otherSet) {
        var differenceSet = new Set ()

        var values = this.values ()
        for (var i=0; i<values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet
    }
    this.subset = function (otherSet) {
        if (this.size () > otherSet.size()) {
            return false
        } else {
            var values = this.values
            for (var i=0; i<values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false
                }
            }
            return true
        }
    }
}

