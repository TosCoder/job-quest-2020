const Fib = (index) => {
    // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
    let result = logicFib(index)
    
    console.log(result[index])

}

const logicFib = (index) => {
    if (index===1) {
        return [0, 1]
    } 
    else {
      let arrayFib = logicFib(index - 1)

      arrayFib.push(arrayFib[arrayFib.length - 1] + arrayFib[arrayFib.length - 2])

      return arrayFib
    }

}

module.exports = Fib