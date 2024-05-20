  function solution(strings, n) {
    return strings.sort((a,b)=> {
        if(a.charAt(n) > b.charAt(n)) return 1;
        else if (a.charAt(n) < b.charAt(n)) return -1;
        else {
            if(a > b) return 1;
            else if(b > a ) return -1;
            else 0;
        }
    })
  }