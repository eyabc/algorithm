// 이중 연결 리스트에서는 처음에서 끝, 끝에서 처음, 양방향으로 리스트 순회가 가능하다.
// 한 방향으로만 연결된 연결 리스트는 순회 시 원소를 찾지 못하면 다시 맨 처음으로 돌아가야 했다. 
function DoubleLinkedList () {
    var Node = function (element) {
        this.element = element
        this.next = null
        this.prev = null
    }
    var length = 0
    var head = null
    var tail = null

    this.insert = function (position, element) {
        // 범위 외의 값인지 체크한다. 
        // 만약 포지션이 length/2 보다 클 때엔 뒤에서 부터 거꾸로 루프를 돌리면 순회할 원소의 개수가 감소하므로 성능이 향상 된다. 
        if (position >=0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0;
            
            // 첫 번째 위치인 경우
            if (position === 0) {
                // 비어 있는 원소라면
                if (!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            // 마지막 위치인 경우
            } else if (position === length) {
                current = tail
                current.next = node
                node.prev = current
                tail = node 
            // 중간 위치인 경우
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current;
                node.prev = previous
                current.prev = node
                previous.next = node
                length ++
                return true
            }
        } else {
            return false
        }
    }
    
    this.removeAt = function (position) {
        // 범위 체크
        if (postion > -1 && postiion < length) {
            var current = head,
            previous,
            index = 0

            // 첫번째 원소 삭제
            if (postion === 0) {
                head = current.next
                
                //원소가 하나 뿐이라면 tail을 업데이트 한다. 
                if (length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            // 마지막 원소 삭제
            } else if (postion === length -1 ) {
                current = tail
                tail = current.prev
                tail.next = null
            // 중간 원소 삭제
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next 
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--;
            
            return current.element

        } else {
            return false
        }
    }
}