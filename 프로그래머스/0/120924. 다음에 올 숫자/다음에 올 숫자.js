const check = (list) => {
    if(list[2] - list[1] === list[1] - list[0]) return true
    else false
}

const calcAS = (list, n) => {
    // arithmetic sequence : 등차
    const d = list[1] - list[0];
    return list[0] + (n-1) * d
}

const calcGS = (list, n) => {
    // geometric sequence : 등비
    const r = list[1] / list[0]
    return list[0] * (r ** (n-1))
}

function solution(common) {
    if(check(common)) return calcAS(common, common.length + 1)
    else return calcGS(common, common.length + 1)
}