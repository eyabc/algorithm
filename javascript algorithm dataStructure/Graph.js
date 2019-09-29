function Graph () {
    var verticles = []
    // 인접 리스트는 딕셔너리 클래스로 각각 저장한다.
    // 여기서 딕셔너리는 정점 명칭과 인접 정점 리스트를 키-값으로 갖는다. 
    var adjList = new Dictionary ();
    
    this.addVertex = function (v) {
        verticles.push(v)
        adjList.set(v, [])
    }
    // 무방향 그래프이므로 간선을 서로 추가한다. 
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }
    
    this.toString = function () {
        var s = ''
        for (var i=0; i<verticles.length; i++) {
            s += verticles[i] + ' -> ';
            var neighbors = adjList.get(verticles[i])
            for (var j=0; j<neighbors.length; j++) {
                s += neighbors[j] +''
            }
            s += '\n'
        }
        return s
    }
    var initializeColor = function () {
        var color = []
        for (var i=0; i<verticles.length; i++) {
            color[verticles[i]] = 'white'
        }
        return color
    }
    // BFS 너비 우선탐색 - 큐
    this.bfs = function (v, callback) {
        var color = initializeColor (), 
            queue = new Queue ();
        queue.enqueue (v)
        // 1 큐를 생성한다.

        // 2 v를 방문했음(회색)으로 표시하고 큐에 v를 추가한다.
        // 3 큐는 비어있지 않으므로 다음 과정을 밟는다.
        // 1 u를 큐에서 삭제한다.
        // 2. u를 "방문했음"(회색)으로 표시한다.
        // 3. u의 "방문하지 않은"(흰색) 모든 인접 정점을 큐에 넣는다.
        // 4. u를 '탐색했음"(흑색) 으로 표시한다.
        while
    }
}
function Dictionary () {
    var items = {}

    this.has = function (key) {
        return key in items
    }

    this.set = function (key, value) {
        items[key] = value
    }
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true
        } else {
            return false
        }
    }
    this.get = function (key) {
        return this.has(key)? items[key] : undefined
    }

    this.values = function () {
        var values = []
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }
        return values
    }
}
function Queue() {

    var items = [];

    this.enqueue = function(element){
        items.push(element);
    };

    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.clear = function(){
        items = [];
    };

    this.size = function(){
        return items.length;
    };

    this.print = function(){
        console.log(items.toString());
    };
}
