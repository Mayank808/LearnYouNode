const fs = require('fs')
const http = require('http')

const port = process.argv[2]
const file = process.argv[3]

const httpServer = http.createServer((req, res) => {
    // res.writeHead(200, { 'content-type': 'text/plain' }) // create response header

    fs.createReadStream(file).pipe(res)
})

httpServer.listen(port)