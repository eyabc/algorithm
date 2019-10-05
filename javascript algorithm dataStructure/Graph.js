function Graph () {
    var vertices = []
    // 인접 리스트는 딕셔너리 클래스로 각각 저장한다.
    // 여기서 딕셔너리는 정점 명칭과 인접 정점 리스트를 키-값으로 갖는다. 
    var adjList = new Dictionary ();
    
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }
    // 무방향 그래프이므로 간선을 서로 추가한다. 
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }
    
    this.toString = function () {
        var s = ''
        for (var i=0; i<vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i])
            for (var j=0; j<neighbors.length; j++) {
                s += neighbors[j] +''
            }
            s += '\n'
        }
        return s
    }
    var initializeColor = function () {
        var color = []
        for (var i=0; i<vertices.length; i++) {
            color[vertices[i]] = 'white'
        }
        return color
    }
    // BFS 너비 우선탐색 - 큐
    this.bfs = function (v, callback) {
        var color = initializeColor (), 
        // 방문/탐색 정점을 저장할 Queue 인스턴스 생성
            queue = new Queue ();
        // bfs 메소드는 알고리즘의 출발 지점이 될 시작 정점 v를 인자로 받아 큐에 넣는다. 
        queue.enqueue (v)
        // 큐가 비어있지 않다면
        while (!queue.isEmpty()) {
            // 큐에서 맨 앞의 정점을 꺼내어
            var u = queue.dequeue (),
            // 이 정점의 인접리스트를 가져온다.
            neighbors = adjList.get(u)
            // 그리고 이 정점은 이미 방문했음이므로 색깔은 grey로 표시한다. 
            color[u] = 'grey'
            // u의 인접리스트를 순회하면서
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i]
                if (color[w] === 'white') {
                    // 추출한 각 인접 정점에 대해 아직 방문하지 않은 상태라면(white) 방문했음으로 표시하고 큐에 추가한다. 
                    // 차후 이 정점의 탐색이 끝나면 이 큐에서 삭제될 것이다. 
                    color[w] = 'grey'
                    queue.enqueue(w)
                }
                // 해당 정점과 그 인접 정점 모두 확인이 끝나면 '탐색했음' 으로 표시한다. 
                color[u] = 'black'
                // 선택사항이지만 잘 쓰면 뭔가 유용한 일을 시킬 수 있다. 
            }
            if (callback) {
                callback (u)
            }
        }
    }
    this.BFS = function(v){

        var color = initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];
        queue.enqueue(v);

        for (var i=0; i<vertices.length; i++){
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()){
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (i=0; i<neighbors.length; i++){
                var w = neighbors[i];
                if (color[w] === 'white'){
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }

        return {
            distances: d,
            predecessors: pred
        };
    };
    this.dfs = function (callback) {
        var color = initializeColor ()

        for (var i=0; i<vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    }
    var dfsVisit = function(u, color, callback){

        color[u] = 'grey'; // 정점u를 방문했으니 방문했음으로 표시
        // 방문한 정점을 출력하는 callback함수
        if (callback) {
            callback(u);
        }
        console.log('방문했음 ' + u);
        // u의 인접리스트를 조회한다. 
        var neighbors = adjList.get(u);
        // 방문하지 않은 인접정점 w에 대해서 dfsVisit함수를 재귀호출하면서 w와 기타인자를 넘긴다. 

        for (var i=0; i<neighbors.length; i++){
            var w = neighbors[i];
            if (color[w] === 'white'){
                // 정점 w를 다음에 방문할 수 있게 스택에 추가한다. ?
                dfsVisit(w, color, callback);
            }
        }
        // 해당 정점과 인접 정점을 깊이 방향으로 모두 방문한 후에는 탐사가 모두 끝났으니 백트랙하고, 색깔은 black으로 표시한다.

        color[u] = 'black';
        console.log('탐색했음 ' + u);
    };
    var time = 0;
    this.DFS = function () {
        var color = initializeColor ()
        // 자바스크립트에서 객체가 아닌 변수는 다른 메서드에 레퍼런스로 전달할 수 없으므로 시간을 인자로 넘길수 없다
        // 배열을 선언하고 그래프의 모든 정점에 대해 배열 값을 초기화한다. 
        d = [],         // u의 방문시간 d[u]
        f = [],         // u의 탐색시간 f[u]
        p =[],          // u의 선행자 p[u]
        time = 0

        for (var i=0; i<vertices.length; i++) {
            f[vertices[i]] = 0
            d[vertices[i]] = 0
            p[vertices[i]] = null
        }

        for (i=0; i<vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, d, f, p);
            }
        }
        return {
            discovery: d,
            finished: f,
            predecessors : p
        }
    }
    var DFSVisit = function (u, color, d, f, p) {
        console.log('방문 '+u)
        color[u] = 'grey'
        d[u] = ++time // 방문시간 기록
        var neighbors = adjList.get(u)

        for(var i=0; i<neighbors.length; i++) {
            var w = neighbors[i]
            if (color[w] === 'white') {
                p[w] = u
                DFSVisit (w, color, d, f, p)
            }
        }
        color [u] = 'black'
        f[u]= ++ time // 탐색 시간 기록
        console.log('탐색 ' + u)
    }
}

function printNode (value) {
    console.log('탐색한 정점:'+ value)
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

// var graph = new Graph ()
// var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
// for (var i=0 ; i<myVertices.length; i++) {
//     graph.addVertex(myVertices[i])
// }
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

// graph.bfs(myVertices[0], printNode)
// var SP = graph.BFS(myVertices[0])

// 시작정점은 A이다.
// var fromVertex = myVertices[0]
// // A를 제외한 다른 모든 정점에 대해 A로부터의 거리를 계산할 것이다.
// for (var i = 0; i<myVertices.length; i++) {
//     // 루프의 현재 정점을 toVertex에 담고
//     var toVertex = myVertices[i],
//     // 경로를 저장할 스택을 생성한다. 
//         path = new Stack ()
//         // toVertex -> fromVertex 방향으로 경로를 따라 간다. v를 경로 스택에 추가한다.
//     for (var v= toVertex; v !== fromVertex; v=SP.predecessors[v]) {
//         path.push[v]
//         // 경로를 완성하기 위해 시작 정점 역시 스택에 추가한다.
//         path.push(fromVertex)
//         // 문자열 변수 s를 선언하고 시작 정점을 꺼내 할당한다. 
//         var s = path.pop()
//         while (!path.isEmpty()) {
//             s += '-' + path.pop()
//         }
//         console.log(s)
//     }
    
// }

// graph.dfs(printNode)

graph = new Graph();

myVertices = ['A','B','C','D','E','F'];
for (i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

graph.DFS(printNode)