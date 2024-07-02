function solution(date1, date2) {
    const fullDate1 = date1.map((item)=> item.toString()).reduce((acc, elem)=>{return acc+=elem},'')
    const fullDate2 = date2.map((item)=> item.toString()).reduce((acc, elem)=>{return acc+=elem},'')
    
    return Number(fullDate1) >= Number(fullDate2) ? 0 : 1
} 