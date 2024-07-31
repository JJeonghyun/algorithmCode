function solution(l, r) {
    const result = []
    for(let i = l ; i <= r ; i++){
        // 숫자로 뭐 .. 방법없나 하다가 No Time
        // 숫자를 문자열로 변경하고 하나씩 분리함
        const temp = i.toString().split("")
        // 분리한 배열이 모두 "5" || "0" 으로 이루어져 있으면 그 숫자를 배열에 넣어버림
        if(temp.every((item)=> item === "5" ||item === "0")) result.push(i)
    }
    // 결과 배열이 비었으면 [-1] 아니면 예쁘게 잘 넣은 배열 반환
    return result.length ? result : [-1]
}