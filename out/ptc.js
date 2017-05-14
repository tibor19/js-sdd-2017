"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = run;
function tailCall(num, num2) {
    try {
        return tailCall(num + 1, num2);
    } catch (e) {
        return num;
    }
}

console.log(tailCall(0, 2));

function fib(n) {

    if (n < 1) {
        return 0;
    }

    if (n < 3) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

function fibIter(a, b, iter) {
    if (iter <= 2) {
        return a + b;
    }

    return fibIter(b, a + b, --iter);
}

function fib2(num) {
    return fibIter(0, 1, num);
}

function run() {
    fib(10);
    fib2(10);
}