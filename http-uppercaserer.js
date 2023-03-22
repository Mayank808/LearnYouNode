const http = require('http')
const map = require('through2-map')

const port = process.argv[2]

let server = http.createServer((req,res) => {

    // dont forget error handling 
    if (req.method !== 'POST') return res.end('Please only send Post Requests\n')

    req.pipe(map( (chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
    
}).listen(port)
