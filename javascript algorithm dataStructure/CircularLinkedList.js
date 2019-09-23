function CircularLinkedList () {
    var Node = function(element) {
        this.element = element;
        this.next = null
    }
    var length = 0
    var head = null

    this.append = function (element) {
        var node = new Node(element), 
        current

        // 첫 노드일 때
        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next !== head) {
                current = current.next
            }
            current.next = node
        }
        node.next = head
        length++
    }
    this.insert = function(position, element){
        // 범위 검사
        if (position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            // 첫번째에 추가할 때
            if (position === 0) {
                node.next = current
                // 마지막 elemnt 업데이트
                while (current.next !== head) {
                    current = current.next
                }
                head = node
                current.next = head
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
                // 마지막 요소일 경우 업데이트
                if (node.next === null) {
                    node.next = head
                }
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function(position){
        if (position > -1 && position <length) {
            var current = head, previous, index = 0
            // 첫번째 일경우
            if (position === 0) {
                while (current.next !== head) {
                    currrent = current.next
                }
                head = head.next
                current.next = head
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next 
                }
                previous.next = current.next
            }

            //
            length--
            return current.element
        } else {
            return false
        }
    }
    this.remove = function(element){
        var index = this.indexOf(element)
        return this.remove(index)
    }
    this.indexOf = function(element){
        var current = head, index = -1

        if (element == current.element) {
            return 0
        }
        while (current.next != head) {
            if (element == current.element) {
                return idnex
            }
            current.current.next
            index++
        }
        // check list item
        if (element == current.element) {
            return index
        }
        return -1
    }
}