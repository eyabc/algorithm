// 최소 우선순위 큐
// 우선순위값이 낮으면 낮을수록 앞자리로 이동(1이 가장 작다)
function PriorityQueue () {
    var items = []
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority
    }
    this.isEmpty = (() => items.length ==0)
    this.print = (() => console.log(items))
    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority)
        // 빈 배열이면 그냥 원소를 넣는다.
        if(this.isEmpty()) {
            items.push(queueElement)
        } else {
            // 큐가 비어있지 않다면 먼저 기존의 원소들과 우선순위를 비교한다. 
            // 큐의 루프문을 종료한다.
            var added = false
            
            // 새 원소보다 우선순위가 더 높은 기존 원소가 있다면 한 칸 앞에 새 원소를 추가한다. 
            for (let i = 0; i<items.length; i++) {
                if (queueElement.priority > items[i].priority) {
                    items.splice(i, 0, queueElement)
                    added = true
                    break;
                } 
            }
            //만약 새원소의 우선순위가 가장 낮다면 큐의 맨 뒤편에 추가한다. 
            if (!added) {
                items.push(queueElement)
            }
        }
    }
}
var _priorityQueue = new PriorityQueue();
_priorityQueue.enqueue("j", 2)
_priorityQueue.enqueue("Q", 3)
_priorityQueue.enqueue("Q", 2)

_priorityQueue.enqueue("Q", 1)
_priorityQueue.enqueue("Q", 2)

_priorityQueue.print()