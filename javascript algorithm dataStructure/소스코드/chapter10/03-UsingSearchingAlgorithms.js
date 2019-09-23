function createNonSortedArray(items){
    var array = new ArrayList();

    for (var i = items; i> 0; i--){
        array.insert(i);
    }

    return array;
}

var array = createNonSortedArray(5);

console.log('********** 순차 검색 #3 **********');

console.log(array.sequentialSearch(3));

console.log('********** 최소값 **********');

console.log(array.findMinValue());

console.log('********** 최대값 **********');

console.log(array.findMaxValue());

console.log('********** 이진 검색 #3 **********');

console.log(array.binarySearch(3));

console.log('********** 이진 검색 #2 **********');

var array = createNonSortedArray(8);

console.log(array.binarySearch(2));