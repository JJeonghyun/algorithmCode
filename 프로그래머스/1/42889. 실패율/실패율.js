function solution(N, stages) {
    let stageFail = {}
    let indexStage = 1
    while(1){
        if(indexStage > N) break;
        const fail = [...stages].filter((item)=> item === indexStage).length / stages.length
        stageFail[indexStage] = fail
        stages = stages.filter((item)=> item > indexStage)
        indexStage++;
    }
     return Object.keys(stageFail).sort((a,b) => stageFail[b]-stageFail[a]).map((item)=>+item)
}