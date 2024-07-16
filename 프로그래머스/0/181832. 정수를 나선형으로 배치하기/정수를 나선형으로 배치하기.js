function solution(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let left = 0
    let right = n - 1
    let top = 0
    let bottom = n - 1
    let number = 1;

    while (1) {
        if(left > right || top > bottom) break;
        // 왼 > 오
        for (let y = left ; y <= right ; y++) {
            matrix[top][y] = number++;
        }
        top++;

        // 위 > 아래
        for (let x = top ; x <= bottom ; x++) {
            matrix[x][right] = number++;
        }
        right--;

        // 오 > 왼
        for (let y = right ; y >= left ; y--) {
                matrix[bottom][y] = number++;
        }
        bottom--;

        // 아래 > 위
        for (let x = bottom; x >= top ; x--) {
            matrix[x][left] = number++;
        }
        left++;
    }

    return matrix;
}