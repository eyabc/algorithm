function hotPotato (nameList, num){

    var queue = new Queue();

    for (var i=0; i<nameList.length; i++){
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while (queue.size() > 1){
        for (var i=0; i<num; i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '(을)를 뜨거운 감자 게임에서 퇴장시킵니다.');
    }

    return queue.dequeue();
}

var names = ['John','Jack','Camila','Ingrid','Carl'];
var winner = hotPotato(names, 7);
console.log('승자는 ' + winner + '입니다.');