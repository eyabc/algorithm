function BinarySearchTree () {
    // 트리에서는 key로 노드를 식별한다. 
    var Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null

    this.insert = function (key) {
        var newNode = new Node (key) 
        if (root === null) {
            root = newNode
        } else {
            insertNode (root, newNode)
        }
    }
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode (node.left, newNode)
            }         
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverse(root, callback)
    }
    this.inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }
    function printNode(value) {
        console.log(value)
    }
    tree.inOrderTraverse(printNode)

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback)
    }
    this.preOrderTraverse = function (node, callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback)
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode (node.left, callback)
        postOrderTraverseNode (node.right, callback)
        callback(node.key)
    }
    this.min = function () {
        return minNode (root)
    }
    this.minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return null
    }

    this.max = function () {
        return maxNode (root)
    }
    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    this.search = function (key) {
        return searchNode (root, key) 
    }
    var searchNode = function (node, key) {
        if (node === null) {
            return false
        }
        if (key > node.key) {
            searchNode (node.right, key)
        } else if (key < node.key) {
            searchNode (node.left, key)
        } else {
            return true
        }
    }
    this.remove = function (key) {
        root = removeNode (root, key) 
    }
    var removeNode = function (node, key) {
        if (node === null) return false
        if (key < node.key) {
            node.left = removeNode (node.left, key)
            return node
        } else if (key > node.key) {
            node.right = removeNode (node.right, key)
            return node
        } else {
            // key 가 node.key와 같다.
            // 1. 리프노드
            if (node.left === null && node.right === null) {
                node = null
                return node
            } 
            // 2. 자식이 하나뿐인 노드
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node0
            }
            // 3. 자식이 둘인 노드
            // 3-1 우측 서브트리로부터 최소 노드를 찾는다. 
            var aux = findMinNode (node.right)
            //  찾은 최소 노드의 값으로 수정한다. 삭제할 키 자체가 교체되므로 결국 삭제되는 것이다.
            node.key = aux.key
            // 한 트리에 동일한 키를 가진 노드가 중복되어 생기므로 우측 서브트리의 최소노드를 삭제한 노드의 위치로 옮겨간다. 
            node.right = removeNode (node.right, aux.key)
            // 수정된 노드를 반환한다. 
            return node

        }
    }
    this.minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return node
    }
}