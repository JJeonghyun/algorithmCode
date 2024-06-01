const CASE_1 = [1,2,3,4,5]
const CASE_2 = [2,1,2,3,2,4,2,5]
const CASE_3 = [3,3,1,1,2,2,4,4,5,5]

const solveMath = (arr, method)=>{
    const rule =[...new Array(arr.length)].map((_,index)=> method[index % method.length]);
    return arr.filter((item,idx)=> item === rule[idx]).length
}

function solution(answers) {
    const result = [];
    
    const no1 = solveMath(answers, CASE_1)
    const no2 = solveMath(answers, CASE_2)
    const no3 = solveMath(answers, CASE_3)
    
    const solveNumArr = [no1, no2, no3]
    
    const maxValue = Math.max(...solveNumArr);
    
    for (let i = 0; i < 3; i++) {
      if (maxValue === solveNumArr[i]) result.push(i+1)
    }
    return result
   
}   


//     const scoreArr = [
//         { score: no1, rank: 1 },
//         { score: no2, rank: 2 },
//         { score: no3, rank: 3 }
//     ];
    
//     return scoreArr.filter(item => item.score > 0).sort((a, b) => b.score - a.score).map((elem)=> elem.rank);