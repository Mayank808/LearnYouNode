const arguments = process.argv
let sum = 0
for (let i = 2; i < arguments.length; i++) {
    sum += Number(arguments[i])
}
console.log(sum)