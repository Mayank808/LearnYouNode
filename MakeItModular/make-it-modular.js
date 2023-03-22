const myMod = require('./mymodule')


myMod(process.argv[2], process.argv[3], (err, data) => {
    if (err) return console.err(err)
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
})