function solution(order) {
    let result = 0;
    order.forEach((item)=>{
        switch(item){
            case "iceamericano":
            case "americanoice":
            case "americano":
            case "anything":
            case "hotamericano":
            case "americanohot":
            case "americano":
                result += 4500;
            break;
            case "icecafelatte":
            case "cafelatteice":
            case "hotcafelatte":
            case "cafelattehot":
            case "cafelatte":
                result += 5000;
            break; 
        }
    })
    return result;
}