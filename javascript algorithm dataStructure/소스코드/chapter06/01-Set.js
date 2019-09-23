/**
 * ECMSCRIPT 6 명세에는 이미 Set 클래스 구현에 대한 내용이 포함되어 있다.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * 여기서는 동일한 기능의 구현체를 작성하였다
 * @constructor
 */
function Set() {

    var items = {};

    this.add = function(value){
        if (!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };

    this.remove = function(value){
        if (this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };

    this.has = function(value){
        return items.hasOwnProperty(value);
        //return value in items;
    };

    this.clear = function(){
        items = {};
    };

    /**
     * 대부분의 현대 브라우저에서는 작동함
     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
     * @returns {Number}
     */
    this.size = function(){
        return Object.keys(items).length;
    };

    /**
     * 크로스 브라우저(구 브라우저) 호환을 위한 함수
     * @returns {number}
     */
    this.sizeLegacy = function(){
        var count = 0;
        for(var prop in items) {
            if(items.hasOwnProperty(prop))
                ++count;
        }
        return count;
    };

    /**
     * 대부분의 현대 브라우저에서는 작동함
     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
     * @returns {Array}
     */
    this.values = function(){
        return Object.keys(items);
    };

    this.valuesLegacy = function(){
        var keys = [];
        for(var key in items){
            keys.push(key);
        }
        return keys;
    };

    this.getItems = function(){
      return items;
    };

    this.union = function(otherSet){
        var unionSet = new Set(); //{1}

        var values = this.values(); //{2}
        for (var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }

        values = otherSet.values(); //{3}
        for (var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }

        return unionSet;
    };

    this.intersection = function(otherSet){
        var intersectionSet = new Set(); //{1}

        var values = this.values();
        for (var i=0; i<values.length; i++){ //{2}
            if (otherSet.has(values[i])){    //{3}
                intersectionSet.add(values[i]); //{4}
            }
        }

        return intersectionSet;
    };

    this.difference = function(otherSet){
        var differenceSet = new Set(); //{1}

        var values = this.values();
        for (var i=0; i<values.length; i++){ //{2}
            if (!otherSet.has(values[i])){    //{3}
                differenceSet.add(values[i]); //{4}
            }
        }

        return differenceSet;
    };

    this.subset = function(otherSet){

        if (this.size() > otherSet.size()){ //{1}
            return false;
        } else {
            var values = this.values();
            for (var i=0; i<values.length; i++){ //{2}
                if (!otherSet.has(values[i])){    //{3}
                    return false; //{4}
                }
            }
            return true;
        }
    };
}