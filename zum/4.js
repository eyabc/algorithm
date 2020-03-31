function solution (S, C) {
    const company = C.toLowerCase();
    const obj = {};
    return S.split(';').map(item => {
        const name = item.trim();
        let s = name.replace(/\-/g, '').toLowerCase().split(' ');
        let id = `${s.pop()}_${s[0]}`;
        obj[id] = (obj[id] || 0) + 1;
        if (obj[id] > 1) id += obj[id];
        return `${name} <${id}@${company}.com>`;
    }).join('; ');
}

const S = "John Doe; Peter Benjamin Parker; Mary Jane Watson-Parker; John Elvis Doe; John Evan Doe; Jane Doe; Peter Brian Parker";
const C = "Example";
const resolve = `John Doe <doe_john@example.com>; Peter Benjamin Parker <parker_peter@example.com>; Mary Jane Watson-Parker <watsonparker_mary@example.com>; John Elvis Doe <doe_john2@example.com>; John Evan Doe <doe_john3@example.com>; Jane Doe <doe_jane@example.com>; Peter Brian Parker <parker_peter2@example.com>`
console.log(solution(S, C) === resolve)

import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;

public class Solution {
    public static String solution (String S, String C) {
    /*
      const obj = {}
      const company = C.toLowerCase()
      return S.split(';').map(v => {
        const name = v.trim()
        const vArr = name.toLowerCase().replace(/\-/g, '').split(' ')
          let id = `${vArr.pop()}_${vArr[0]}`
          obj[id] = (obj[id] || 0) + 1
          if (obj[id] > 1) id += obj[id]
          return `${name} <${id}@${company}.com>`
      }).join('; ')
    */
    HashMap<String, Integer> map = new HashMap();
    String company = C.toLowerCase();
    String result = String.join("; ",
        Arrays.asList(S.split(";")).stream().map(v -> {
            String name = v.trim();
            String[] vArr = name.toLowerCase().replace("-", "").split(" ");
            int last = vArr.length;
            String id = vArr[last - 1] + "_" + vArr[0];
            int cnt = (map.get(id) == null ? 0 : map.get(id)) + 1;
            map.put(id, cnt);
            if (cnt > 1) id += String.valueOf(cnt);
            return name + " <" + id + "@" + company + ".com>";
        }).collect(Collectors.toList())
    );
    return result;
}

public static void main(String[] args) {
    String C = "Example";
    String S = "John Doe; Peter Benjamin Parker; Mary Jane Watson-Parker; John Elvis Doe; John Evan Doe; Jane Doe; Peter Brian Parker";
    String resolve = "John Doe <doe_john@example.com>; Peter Benjamin Parker <parker_peter@example.com>; Mary Jane Watson-Parker <watsonparker_mary@example.com>; John Elvis Doe <doe_john2@example.com>; John Evan Doe <doe_john3@example.com>; Jane Doe <doe_jane@example.com>; Peter Brian Parker <parker_peter2@example.com>";
    System.out.println(solution(S, C).equals(resolve));
    System.out.println(resolve);
}
}