function LinkedList() {
 var Node = function(element) {
     this.element = element;
     this.next = null;
 }

 var length = 0
 var head = null

 // 리스트의 맨 끝에 원소 추가
//  빈 연결리스트인지 여부에 따라 두가지 경우를 각각 고려해야 한다. 
 this.append = function (element) {
    var node = new Node(element), current; 

    // 리스트가 비어 있다면
    if (head === null) {
        head = node
    } else {
        current = head
        // 마지막 원소를 발견할 때 까지 계록 루프 순환한다. 
        while (current.next) {
            current = current.next
        }
        // 마지막 원소를 링크할 수 있게 다음 노트에 할당한다. 
        current.next = node
    }
    // 리스트의 크기를 업데이트 한다.
    length++;
 } 
 // 해당 위치에 원소 삽입
 this.insert = function(position, element) {
    // 범위 외의 값인지 체크
    if (position >= 0 && position <= length) {
        var node = new Node(element),
        current = head,
        previous,
        index = 0

        // 첫 번쨰로 추가
        if (position === 0) {
            node.next = current;
            head = node;
        } else {
            while (index++ <position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
        length++;
        return true
    } else { 
        return false
    }
 }

 // 삭제하려는 원소가 리스트의 첫 번째 원소인지 아닌지에 따라 두 가지 경우를 생각해야한다. 
 // 해당 위치에 있는 원소 삭제
 this.removeAt = function(position) {
     // 범위 외의 값인지 체크   
     if (position > -1 && position < length) {
        var current = head,
        previous,
        index = 0;

        // 첫번째 원소 삭제
        if (position === 0) {
            head = current.next
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next
            }
            previous.next = current.next
        }
        length--;
        return current.element

     } else {
         return null;
     }
 }
 // 원소 삭제
 this.remove = function (element) {
     var index = this.indexOf(element)
     return this.removeAt(index)
 }
 // 해당 원소의 인덱스를 반환. 존재하지 않을 경우 -1
 this.indexOf = function(element) {
     var current = head, 
     index = 0;

     while (current) {
         if (element === current.element) {
             return index
         }
         index++;
         current = current.next;
     }
     return -1;
 }
 // 원소가 하나도 없다면 true
 this.isEmpty = function () {
     return length === 0
 }
 // 원소 개수 반환
 this.size = function () {
     return length
 }
 // 연결 리스트는 원소를 node에 담아두기 때문에 원소의 값만을 출력하려면 자바스크립트 기본 객체로 부터 상속한 toString메서드를 override해야한다.
 this.toString = function () {
     var current = head, 
     string = '';

     while (current) {
         string += current.element;
         current = current.next;
     }
     return string
 }
 this.print = function () {}
 this.getHead = function () {
     return head
 }

}

var list = new LinkedList()
list.append(15)
list.append(10)
console.log(list.indexOf(15))