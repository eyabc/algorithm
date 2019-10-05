function ArrayList () {
    var array = [];

    this.insert = function (item) {
        array.push(item)
    }
    this.toString = function () {
        return array.join()
    }
    this.bubbleSort = function () {
        var length = array.length;
        // 첫번째 원소부터 마지막 원소까지 순회한다.
        for (var i=0; i<length; i++) {
            // 첫번째 원소부터 끝에서 두번째 원소까지 순회하면서 현재 원소와 그 다음 원소를 비교한다. 
            for (var j=0; j<length-1; j++) {
                if (array[j] > array[j+1]) {
                    // 원소가 정렬되어있지 않다면 위치를 서로 바꾼다. 
                    swap(j, j+1)
                }
            }
        }
    }
    var swap = function (index1, index2) {
        var aux = array[index1]
        array[index1] = array[index2]
        array[index2] = aux
    }
    function craeteNonSortedArray (size) {
        var array = new ArrayList()
        for (var i = size; i>0; i--) {
            array.insert(i)
        }
        return array
    }
    this.modifiedBubbleSort = function () {
        var length = array.length
        for (var i=0; i<length; i++) {
            for (var j=0; j<length-1-i; j++) {
                if (array[j] > array[j+1]) {
                    swap (j, j+1)
                }
            }
        }
    }
    this.selectionSort = function () {
        var length = array.length, 
            indexMin
        for (var i=0; i<length-1; i++) {
            indexMin = i;
            for (var j=i; j<length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j
                }
            }
            if (i !== indexMin) {
                swap(i, indexMin)
            }
        } 
    }

    this.insertionSort = function () {
        var length = array.length,
            j, temp;
        for (var i=1; i<length; i++) {
            j = i
            temp = array[i]
            while (j>0 && array[j-1] > temp) {
                array[j] = array[j-1]
                j--
            }
            array[j] = temp
        }
    }
    this.mergeSort = function () {
        array = mergeSortRec(array)
    }
    var mergeSortRec = function (array) {
        var length = array.length
        // 병합 정렬은 원소가 하나밖에 남지 않을 때까지 작은 배열 여러 개로 분할한다고 했었다
        // 따라서 재귀 알고리즘에서 필수적인 중단 조건은 배열 크기가 1과 같다는 것이다.
        // 이 조건을 만족하는 배열을 반환한다.
        if (length === 1) {
            return array
        }
        // 원소가 2개 이상이라면 배열의 중간지점을 찾는다.
        var mid = Match.floor(length / 2)
        // 좌 우측으로 분할한다. 
        left = array.slice(0, mid),
        right = array.slice(mid, length)
        
        return merge (mergeSortRec(left), mergeSortRec(reight))
    }
    // 분할 된 두 배열을 합쳐 큰 배열을 만든다. 
    // 병합을 하면서 정렬도 동시에 수행한다. 
    var merge = function (left, right) {
        // 병합 결과를 저장할 배열, left, right 배열 순회 시 사용할 변수 2개
        var result = [],
            il = 0,
            ir = 0;
        // 배열을 순회하는 동안 left의 원소가 right의 원소보다 더 작은지 비교한다. 
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push (left[il++])
            } else {
                result.push (right[ir++])
            }
        }
        while (il < left.length) {
            result.push(left[il++])
        }
        while (ir < right.length) {
            result.push(right[ir++])
        }
        return result
    }

    this.quickSort = function () {
        // 정렬할 배열, 처음인덱스, 끝인덱스
        quick (array, 0, array.length - 1)
    }
    var quick = function (array, left, right) {
        // 더 작은 원소를 가진 서브배열, 더 큰 원소를 가진 서브배열로 나누어서 quick함수를 재귀호출 하기 위해 선언한다.
        var index

        // 배열 크기가 2이상이면, (원소가 1개인 배열은 이미 정렬된 것이나 다름 없으므로)
        // 해당 배열에 파티션 작업(전체 배열을 넘기는 첫 번째 호출)을 하여 index를 얻는다. 
        if (array.length > 1) {
            // partition 함수의 반환값을 index에 세팅한다.
            index = partition (array, left, right)
            // 더 작은 원소들을 가진 서브 배열이 존재하면 같은 과정을 반복한다.
            if (left < index - 1) {
                quick (array, left, index -1)
            }
            // 더 큰 원소들을 가진 서브배열도 마찬가지로 존재하면 똑같은 과정을 반복한다.
            if (index < right) {
                quick (array, index, right)
            }
        }
    }
    var partition = function (array, left, right) {
        var pivot = array[Math.floor((right + left) /2)], 
            i = left, j = right
        // i와 j의 위치가 역전될 때까지 파티션을 반복한다.
        // pivot 보다 같거나 큰 원소를 찾을 때 좌측 포인터를 우측으로 이동시키고
        // 반대로 pivot 보다 같거나 작은 원소를 찾을 때까지 우측 포인트를 좌측으로 이동시킨다.  
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            // 좌측 포인터가 가리키는 원소는 pivot보다 크고, 우측 포인터가 가리키는 원소는 pivot 보다 작을 것이다.
            // 두 포인터가 역전되어 좌측 포인터가 우측 포인터의 우측으로 넘어가지 않았다면 두 포인터가 가리키는 원소 둘을 교환하고
            // 같은 과정을 반복한다. 
            if (i <= j) {
                swapQuickSort (array, i, j)
                i++
                j--
            }
        }
        // 파티션 과정이 끝나면 좌측 포인터 변수 i를 반환한다. 
        return i;
    }
    var swapQuickSort = function(array, index1, index2) {
        var aux = array[index1]
        array[index1] = array[index2]
        array[index2] = aux
    }

    this.sequentialSearch = function (item) {
        for (var i=0; i<array.length; i++) {
            if (item === array[i]) {
                return i
            }
        }
        return -1;
    }

    this.binarySearch = function (item) {
        this.quickSort ()

        var low = 0,
            high = array.length-1,
            mid, element;

        while (low <= high) {
            mid = Math.floor((low + high) / 2)
            element = array[mid]
            if (element < item) {
                low = mid + 1
            }  else if (element > item) {
                high = mid - 1
            } else {
                return mid
            }
        }
        return -1
    }
}
