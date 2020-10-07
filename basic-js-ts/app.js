var express = require('express');
var http = require('http');
var app = express();
var fib = require('./src/Fib')
var shift = require('./src/Shift')
var secondMax = require('./src/secondMax')
var fizzBuzz = require('./src/FizzBuzz')

http.createServer(app).listen(3000, function () {
    //Fibonacci Sequence

    console.log('1.Fibonacci Sequence')
    fib(1)
    fib(3)
    fib(12)

    //Array shift

    console.log('2.Array shift')
    shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
    shift([1, 2, 3, 4, 5], 'right', 3)

    //Second max

    console.log('3.Second max')
    secondMax([2, 3, 4, 5]) // 4
    secondMax([9, 2, 21, 21]) // 9
    secondMax([4, 4, 4, 4]) // 4
    secondMax([4123]) // 4123
    secondMax([]) // Error

    //FizzBuzz...But

    console.log('4.FizzBuzz...But')
    fizzBuzz(21)
    fizzBuzz(18)
    fizzBuzz(45)


})

