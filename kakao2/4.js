function solution(k, room_number) {
    const room = [];
    return room_number.map((person, key) => {
        const idx = person - 1;
        if(!room[idx]) {
            room[idx] = true;
            return person;
        } else {
            for (let i = idx + 1; i < k; i++) {
                if (!room[i]) {
                    room[i] = true;
                    return i+1;
                }
            }
        }
    });
}

function solution(k, room_number) {
    const room = [];
    return room_number.map(item => {
        for (let i = item ; i <= k ; i++) {
            if(!room.includes(i)) {
                room.push(i)
                return i
            } 
        }
    });
    
}



function solution(k, room_number) {
  const room = new Array(k);
  for (let i = 0; i < k; i++) room[i] = 0

  const solution = room_number.map(v => {
    if (!room[v]) {
      room[v] = 1
      return v
    }
    const k = room.indexOf(0, v+1)
    room[k] = 1
    return k
  })
  return solution
}
[1,2,1,1,
1,1,1,1
,1,1,1,1
,1,1,1,1,
1,1]

function solution(k, room_number) {
    const room = [];
    const obj = {};
    room_number.forEach((person, key) => {
        const idx = person - 1;
        if (!obj[`${person}`]) {
            obj[`${person}`] = 0
        }
        console.log(obj[`${person}`])
        if(!room[idx]) {
            room[idx] = true;
        } else {
            for (let i = person + obj[`${person}`]; i < k; i++) {
                if (!room[i]) {
                    room[i] = true;
                    room_number[key] = i + 1;
                    break;
                }
            }
        }
        
    });
    return room_number;
}
