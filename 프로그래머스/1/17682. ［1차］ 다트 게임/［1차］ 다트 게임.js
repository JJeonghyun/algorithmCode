function solution(dart) {
    const result = [];
    let n = 0;

    while (1) {
        if(n === dart.length) break;
        let score = 0;
        if (dart[n] === '1' && dart[n + 1] === '0') {
            score = 10;
            n += 2;
        } else {
            score = parseInt(dart[n]);
            n++;
        }

        if (dart[n] === 'S') {
            score **= 1;
        } else if (dart[n] === 'D') {
            score **= 2;
        } else if (dart[n] === 'T') {
            score **= 3;
        }
        n++;

        if (dart[n] === '*' || dart[n] === '#') {
            if (dart[n] === '*') {
                score *= 2;
                if (result.length) {
                    result[result.length - 1] *= 2;
                }
            } else if (dart[n] === '#') {
                score *= -1;
            }
            n++;
        }
        result.push(score);
    }

    return result.reduce((acc, item) => {
        return acc += item
    },0);
}
