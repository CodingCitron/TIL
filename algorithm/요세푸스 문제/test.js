const [n, k] = require('fs').readFileSync('test.txt').toString().trim().split(' ').map(n => Number(n))

const nums = Array(n).fill(0).map((n, index) => index + 1)