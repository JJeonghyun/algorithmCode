function solution(babbling) {
        const resultArr = []
        for (let i = 0 ; i < babbling.length ; i++) {
          if (babbling[i].match(/(ayaaya|yeye|woowoo|mama)/)) continue
          resultArr.push(babbling[i].replace(/(aya|ye|woo|ma)/g, ""))
        }
        return resultArr.filter((item) => item == "").length
      }