function createNonSortedArray(size){
    var array = new ArrayList();

    for (var i = size; i> 0; i--){
        array.insert(i);
    }

    return array;
}

function createRandomNonSortedArray(){
    var array = new ArrayList();

    array.insert(3);
    array.insert(5);
    array.insert(1);
    array.insert(4);
    array.insert(2);

    return array;
}

console.log('********** 버블 정렬 **********');

var array = createNonSortedArray(5);

console.log(array.toString());

array.bubbleSort();

console.log(array.toString());

console.log('********** 수정된 버블 정렬 **********');

array = createNonSortedArray(5);

console.log(array.toString());

array.modifiedBubbleSort();

console.log(array.toString());

console.log('********** 선택 정렬 **********');

array = createNonSortedArray(5);

console.log(array.toString());

array.selectionSort();

console.log(array.toString());

console.log('********** 삽입 정렬 **********');

array = createRandomNonSortedArray();

console.log(array.toString());

array.insertionSort();

console.log(array.toString());

console.log('********** 병합 정렬 **********');

array = createNonSortedArray(8);

console.log(array.toString());

array.mergeSort();

console.log(array.toString());

console.log('********** 퀵 정렬 **********');
array = new ArrayList();

array.insert(3);
array.insert(5);
array.insert(1);
array.insert(6);
array.insert(4);
array.insert(7);
array.insert(2);

console.log(array.toString());

array.quickSort();

console.log(array.toString());


