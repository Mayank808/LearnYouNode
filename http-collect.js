const http = require('http')
const bufferlist = require('bl')

let url = process.argv[2]

http.get(url, (res) => {
    let data = ""
    res.on('data', (d) => data += d)
    res.on('error', (err) => {console.err})
    res.on('end', () => {
        console.log(data.length)
        console.log(data)
    })
})

// second solution
// http.get(url, (res) => {
//     res.pipe(bufferlist((err, data) => {
//         if (err) return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
// })