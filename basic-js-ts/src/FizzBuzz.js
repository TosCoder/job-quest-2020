const FizzBuzz = (num) => {

    const a = num % 3 === 0 ? 'Fizz' : ''
    const b = num % 5 === 0 ? 'Buzz' : ''
    console.log(a+b)
}


module.exports = FizzBuzz