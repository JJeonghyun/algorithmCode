const setCountObj = (list) => {
    const counts = {};
    list.forEach((num) => {
        if (!counts[num]) counts[num] = 1;
        else counts[num]++;
    });
    return counts;
}

function solution(a, b, c, d) {
    const counts = setCountObj([a, b, c, d]);
    const removeDuplicate = Object.keys(counts).map((item)=>+item);

    switch (removeDuplicate.length) {
        case 1:
            return 1111 * removeDuplicate[0];
        case 2:
            const [p, q] = removeDuplicate;
            const countP = counts[p];
            const countQ = counts[q];

            if (countP === 2 && countQ === 2) {
                return (p + q) * Math.abs(p - q);
            } else {
                const major = countP > countQ ? p : q;
                const minor = countP > countQ ? q : p;
                return (10 * major + minor) ** 2;
            }
        case 3:
            const major = removeDuplicate.find(value => counts[value] === 2);
            const [minor1, minor2] = removeDuplicate.filter(value => counts[value] === 1);
            return minor1 * minor2;
        case 4:
            return Math.min(...[a, b, c, d]);
    }
}